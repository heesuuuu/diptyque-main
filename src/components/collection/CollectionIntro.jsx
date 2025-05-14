import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCollectionDescriptions } from '../../store/modules/collectionSlice';

const CollectionIntro = () => {
  const dispatch = useDispatch();
  const { selectedCollection, selectedCollectionDescription } = useSelector((state) => state.collection);
  const [isFading, setIsFading] = useState(false);
  const descriptionRef = useRef(null);

  const collectionData = [
    {
      id: 1,
      name: 'Les Essences de Diptyque',
      description:
        'The Essences de Diptyque collection imagines the scent of five natural, odourless, treasures: coral, mother of pearl, bark, water lily and desert rose crystals. Nature magnified.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/1fdX8xQ86aQEgsw76tF2LW/8a1182a7d154901ab3016b09913ec7ae/LES_ESSENCES_2024_VISUEL_COLLECTION_GAMME_ENTIERE_RVB_4080X2295px_DIPTYQUE_VISUAL_ONLY.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 2,
      name: "L'Eau Papier",
      description:
        'A tribute to creativity and the imagination. The Eau Papier Collection plunges you into the heart of multi-faceted white musks: luminous mimosa, blond wood accords and rice vapor.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/1Abp7YEX2dkdoFngWUS4Ym/30b86515ca42a5f0c3879e3c1bcabe43/L-EAU-PAPIER-Y2_2024_VISUEL_PRIORITAIRE_MULTI-PRODUITS_EDT-GEL-PS-HM_RVB_4080x2295_SANS-LOGO_DIPTYQUE.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 3,
      name: 'Fleur de Peau',
      description:
        'The Fleur de Peau Collection is an ode to the love between Eros and Psyche. A myth from antiquity translated into a fragrance, and a deep dive into the realm of musks.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/13ClmnLtqr5C1wP7ymNVr5/fe3ff7cd19aace7850b8aa47ddba9907/Visuel_gamme_4080x2295px.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 4,
      name: 'Orphéon',
      description:
        'The sixties. An evening on the Boulevard Saint-Germain. The atmosphere: effervescent. Today, the tale is told by tonka bean, cedar and juniper berries.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/5srtqTPNVEdbolAS0ELdDD/a9629b03009e79433ffe830896c5fc1e/ORPH%C3%89ON_2025_VISUEL_SECONDAIRE_MULTI-PRODUITS_GAMME-ORPH%C3%89ON-LIMITED-EDITION_RVB_16x9_4080x2295_DIPTYQUE__1_.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 5,
      name: 'Eau Rose',
      description:
        "An olfactory journey deep into the rose, a tribute to the entire flower. With the Eau Rose Collection, Diptyque revisits the flower that symbolizes the perfumer's art.",
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/27XYIdbd4MbwOBeMa3hcOv/16a0f2b4b87756ffd13f232f7a350a35/02_Diptyque_Collection_4080x2295px9.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 6,
      name: 'Eau Capitale',
      description:
        'A tour of the French capital city. A tribute to Paris, the city where Diptyque was born, here celebrated in a chypre - the accord with a thousand facets.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/10M9gQZ3d6S6hctm0gDSC4/456b690f6f61005b106b22fe762f00f2/DESTINATION-PARIS_VISUEL_EDP-EAU-CAPITALE_2024_4080x2295_RVB_HD_DIPTYQUE.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 7,
      name: 'Eau Rihla',
      description:
        'Ancient cities, sand dunes and notes of leather, spices and wood … The Eau Rihla Collection is an odyssey into the East.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/9MUvxqH6fMvIKLgw7t9oa/3fa999e5c3260c5c1d9bf96333283432/Eau-Rihla-co---4080x2295.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 8,
      name: 'Do son',
      description:
        'An olfactory recollection of a childhood in Vietnam. The floral scent of a tuberose carried on the sea breeze.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/2p64rNNuEDhcHRxj5DfYvF/9b8d53f7aa9edf679488770d6780e6a3/DoSonPoster_4080x2295_diptyque_2023__2_.png?fm=avif&w=1920&q=90',
    },
    {
      id: 9,
      name: '34 Boulevard Saint Germain',
      description:
        "The spirit of the Latin Quarter in Paris, fully replicated in one signature Collection. Amber, patchouli, rose and cinnamon, reflecting Diptyque's art of living. Unclassifiable.",
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/7EgQ5qWeh5g2jqFrDaMetX/7591123081117dadae0b8cf0ffd858d3/02_Diptyque_Collection_4080x2295px8.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 10,
      name: 'Eau des Sens',
      description:
        'Stimulating in its originality, the Eau des Sens Collection brings together every aspect of the bigarade, from its branch to its fruit, bitter orange.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/6Lt7ePzsK8u381CeA27bkR/aa831154439c6ace8edb20386de220df/02_Diptyque_Collection_4080x2295px4.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 11,
      name: 'Philosykos',
      description:
        'A memory of a summer in Greece, in a sunlit grove. The Philosykos Collection is an ode to the entire fig tree. Pack your bags.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/3GaIeDomYpCKdZG7ud9lCX/5f7108f59f890b8d441c6a0d4d3addfd/02_Diptyque_Collection_4080x2295px1.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 12,
      name: "L'Ombre dans l'Eau",
      description:
        "Beneath a weeping willow runs a river. The L'Ombre dans l'Eau Collection is a romantic tableau that brings together the scents of blackcurrant berries and roses.",
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/MuLpwJvcVDvqpINzHfXiQ/7ed4facd4a7aea90f7780f5702b4d632/02_Diptyque_Collection_4080x2295px6.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 13,
      name: 'Tam Dao',
      description:
        'A childhood memory transformed into a perfume. The Tam Dao Collection plunges us deep into the sacred forests of Indochina, fragrant with the scent of sandalwood.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/1xDclI8XX8NbU1wcc0ljJt/74c7fa5d2ab745eb5494541da19a6a87/02_Diptyque_Collection_4080x2295px10.jpg?fm=avif&w=1920&q=90',
    },
    {
      id: 14,
      name: 'Eau de Minthé',
      description:
        'A nymph metamorphosed into mint. In a tribute to this myth, the Eau de Minthé collection reinvents an accord emblematic in perfumery - fougère.',
      imgurl:
        'https://images.ctfassets.net/4sg0zck18nfj/2tyi9Eo1cwaqu1M8kcqcXE/2a52174939a620efd670fcd2b6da6cb1/02_Diptyque_Collection_4080x2295px3.jpg?fm=avif&w=1920&q=90',
    },
  ];

  useEffect(() => {
    if (selectedCollection) {
      setIsFading(true);

      setTimeout(() => {
        setIsFading(false);
      }, 500);
    }
  }, [selectedCollection]);

  useEffect(() => {
    const descriptionMap = {};
    collectionData.forEach((item) => {
      descriptionMap[item.name] = item.description;
    });

    dispatch(updateCollectionDescriptions(descriptionMap));
  }, [dispatch]);

  const getCollectionImage = () => {
    const collection = collectionData.find((item) => item.name === selectedCollection);
    return collection ? collection.imgurl : collectionData.find((item) => item.name === 'Philosykos')?.imgurl;
  };

  return (
    <>
      <div className=" tablet:h-0 mobile:h-0"></div>
      <div className=" w-full  h-full   flex items-center justify-center">
        <img
          src={getCollectionImage()}
          alt={selectedCollection || 'Philosykos'}
          className="object-cover h-[641px] w-full tablet:h-[532px]"
        />
      </div>

      <section
        className={` mobile:mt-[100px] lg:w-[1168px] lg:mx-auto transition-opacity duration-500 tablet:mx-[60px] mobile:mx-[16px] ${
          isFading ? 'opacity-50' : 'opacity-100'
        }`}
      >
        {/* 상단 title*/}
        <div className="font-diptyque text-heading1 text-center  ">{selectedCollection || 'Philosykos'}</div>

        {/* Introduction description*/}
        <div ref={descriptionRef} className="mt-[40px] text-center transition-all duration-500 tablet:text-body3 mobile:w-full">
          {selectedCollectionDescription || collectionData.find((item) => item.name === 'Philosykos')?.description}
        </div>
      </section>
    </>
  );
};

export default CollectionIntro;
