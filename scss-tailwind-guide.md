# SCSS와 Tailwind CSS 조합 가이드

## 목차

1. [프로젝트 구조](#프로젝트-구조)
2. [전역 SCSS 파일 설정](#전역-scss-파일-설정)
3. [Tailwind CSS와 SCSS 함께 사용하기](#tailwind-css와-scss-함께-사용하기)
4. [SCSS 변수 활용 방법](#scss-변수-활용-방법)
5. [믹스인(Mixins) 활용 방법](#믹스인mixins-활용-방법)
6. [팀 컨벤션](#팀-컨벤션)

## 프로젝트 구조

```
src/
├── components/
│   ├── Product/
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   └── style.scss
│   └── ...
├── styles/
│   ├── _variables.scss    # 전역 변수 정의
│   ├── _mixins.scss       # 믹스인 정의
│   ├── global.scss        # 전역 스타일
│   └── ...
└── ...
```

## 전역 SCSS 파일 설정

### \_variables.scss

이 파일은 프로젝트 전체에서 사용할 변수들을 관리합니다:

```scss
$white: #fff;
$black: #000;

// 기본 색상
$white: #fff !default;
$black: #000 !default;

// 브랜드 및 시맨틱 색상
$primary: #112856 !default;
$semantic-green: #2f5539 !default;
$semantic-red: #d12f37 !default;
$semantic-blue: #23507a !default;
```

### \_mixins.scss

재사용 가능한 스타일 패턴을 믹스인으로 정의합니다:
다른 파일에서 사용 시 '@include 믹스인이름' 으로 사용합니다.

```scss
// 미디어 쿼리 믹스인
// 데스크탑 전용 (1024px 이상)
@mixin desktop-only {
  @media screen and (min-width: $breakpoint-desktop) {
    @content;
  }
}
// font style 믹스인
@mixin pc-display1 {
  font-size: $font-size-display1-pc;
  line-height: 1.3;
  font-family: $font-family-heading;
  font-weight: $font-weight-bold;
}
```

### global.scss

전역적으로 적용될 스타일을 정의합니다:

```scss
@import 'variables';
@import 'mixins';
@import 'swiper';

:root {
  --background: #{$white};
  --foreground: #{$darkgrey-3};
  --primary: #{$primary};
  --semantic-green: #{$semantic-green};
  --semantic-red: #{$semantic-red};
  --semantic-blue: #{$semantic-blue};
  --lightgrey-1: #{$lightgrey-1};
  --lightgrey-2: #{$lightgrey-2};
  --lightgrey-3: #{$lightgrey-3};
  --lightgrey-4: #{$lightgrey-4};
  --grey-1: #{$grey-1};
  --grey-2: #{$grey-2};
  --grey-3: #{$grey-3};
  --grey-4: #{$grey-4};
  --darkgrey-1: #{$darkgrey-1};
  --darkgrey-2: #{$darkgrey-2};
  --darkgrey-3: #{$darkgrey-3};
  --hd-height: 134px;
}

/* 기본 폰트 설정 */
html,
body {
  overflow-x: hidden;

  @include pc-body2;
}

body {
  color: var(--foreground);
  background: var(--background);
}

/* 헤딩 폰트 설정 */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: #{$font-family-heading};
}
```

## Tailwind CSS와 SCSS 함께 사용하기

Tailwind CSS와 SCSS를 조합하면 유틸리티 클래스의 편리함과 SCSS의 강력한 기능을 함께 활용할 수 있습니다.

### 기본 접근법

기본적으로 Tailwind CSS로 대부분의 스타일링을, scss파일은 보조적으로 사용할 것을 제안합니다.

1. 레이아웃과 대부분의 스타일링에는 Tailwind CSS 클래스를 사용
2. 일부 복잡한 스타일링이나 재사용 가능한 컴포넌트에는 SCSS 사용
3. 필요한 경우 두 가지 방식을 혼합하여 사용

### 예시 - Card 컴포넌트

`Card.jsx`:

```jsx
import React from 'react';
import './style.scss';

const Card = ({ title, description, image, className }) => {
  return (
    <div className={`card rounded-lg shadow-md transition-shadow hover:shadow-lg ${className}`}>
      <div className="relative h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="content p-4">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
```

`style.scss`:

```scss
@import '../../styles/variables';
@import '../../styles/mixins';

.card {
  background-color: white;
  @include transition(transform, 0.2s);

  &:hover {
    transform: translateY(-4px);
  }
}

.content {
  border-top: 3px solid $primary;
}
```

## SCSS 변수 활용 방법

SCSS에서는 변수를 다양한 방식으로 활용할 수 있습니다. 일관성 있는 코드 작성을 위해 아래 가이드라인을 따릅니다.

### 기본 변수 사용법 ($변수명)

**기본적으로 모든 경우에 이 방식을 사용합니다:**

```scss
.element {
  color: $primary;
  margin: $spacing-md;
  font-size: $font-size-base;
  width: calc(100% - $spacing-lg);
  border: 1px solid $border-color;
}
```

### 보간법 사용 (#{$변수명})

보간법은 다음 특수한 경우에만 제한적으로 사용합니다:

1. **선택자에 변수 사용할 때**

```scss
$component: 'button';
.#{$component} {
  background-color: $primary-color;
}
```

2. **URL이나 경로에 변수 사용할 때**

```scss
$imageDir: '../images';
.background {
  background-image: url('#{$imageDir}/bg.jpg');
}
```

3. **반복문으로 클래스 생성할 때**

```scss
@for $i from 1 through 5 {
  .mt-#{$i} {
    margin-top: $i * 8px;
  }
}
```

4. **매우 드문 경우: 속성명에 변수 사용할 때**

```scss
$property: 'margin';
.element {
  #{$property}: 10px;
}
```

> **참고:** 보간법은 필요한 경우에만 사용합니다. 일반적인 CSS 속성 값 지정에는 기본 변수 사용법($변수명)으로 충분합니다.

### 계산에 변수 사용

```scss
.container {
  max-width: $breakpoint-lg - 32px;
  padding: $spacing-md * 2;
}

.heading {
  font-size: $font-size-base * 1.5;
  line-height: $font-size-base * 1.5 * 1.2;
}
```

## 팀 컨벤션

효율적인 협업을 위한 스타일링 컨벤션을 제안합니다:

1. **Tailwind vs SCSS 사용 기준**

   - 기본 스타일링: Tailwind CSS
   - 일부 복잡한 컴포넌트나 재사용 패턴: SCSS

2. **파일명 규칙**

   - scss 파일명 style로 통일: `style.scss`
   - 폴더 구조로 연관성 명시: `components/Product/ProductList.jsx`와 `components/Product/style.scss`

3. **클래스명 규칙**

   - 카멜 케이스(camelCase) 대신 케밥 케이스(kebab-case) 사용
   - BEM 방식 지양 (SCSS 중첩 구문 사용으로 대체)

4. **변수 네이밍**

   - 목적이 명확한 이름 사용: `$primary` (O), `$blue` (X)
   - 접두사로 그룹화: `$spacing-sm`, `$spacing-md`, `$font-size-base`

5. **코드 구성**

   - SCSS 파일 상단에 변수와 임포트 선언
   - 관련 스타일을 함께 그룹화
   - 미디어 쿼리는 관련 선택자 내부에 중첩

6. **주석 작성**
   - 복잡한 스타일 블록에 주석 추가
   - 믹스인 정의 시 사용법 주석 작성
