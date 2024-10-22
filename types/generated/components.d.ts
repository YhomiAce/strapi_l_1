import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    planType: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    link: Schema.Attribute.Component<'elements.button-link', false>;
  };
}

export interface ElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    label: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface ElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    emailInput: Schema.Attribute.Component<'elements.input', true>;
    buttonLink: Schema.Attribute.Component<'elements.button-link', false>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.String;
    priceList: Schema.Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.button-link', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    form: Schema.Attribute.Component<'elements.form', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'seo.meta-data': SeoMetaData;
      'elements.pricing-card': ElementsPricingCard;
      'elements.input': ElementsInput;
      'elements.form': ElementsForm;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
      'blocks.row': BlocksRow;
      'blocks.pricing': BlocksPricing;
      'blocks.hero': BlocksHero;
      'blocks.cta': BlocksCta;
    }
  }
}
