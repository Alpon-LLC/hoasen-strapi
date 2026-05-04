import type { Schema, Struct } from '@strapi/strapi';

export interface PagesTeamCulture extends Struct.ComponentSchema {
  collectionName: 'components_pages_team_cultures';
  info: {
    displayName: 'TeamCulture';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PagesTeamExperience extends Struct.ComponentSchema {
  collectionName: 'components_pages_team_experiences';
  info: {
    displayName: 'TeamExperience';
    icon: 'briefcase';
  };
  attributes: {
    employment_type: Schema.Attribute.Enumeration<
      ['full-time', 'part-time', 'temporary', 'contract']
    >;
    end_date: Schema.Attribute.Date;
    organization: Schema.Attribute.String;
    role: Schema.Attribute.Component<'pages.team-member-role', false>;
    start_date: Schema.Attribute.Date;
    what_they_did: Schema.Attribute.RichText;
  };
}

export interface PagesTeamFrameworkAndTool extends Struct.ComponentSchema {
  collectionName: 'components_pages_team_framework_and_tools';
  info: {
    displayName: 'TeamFrameworkAndTool';
    icon: 'scissors';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesTeamMemberList extends Struct.ComponentSchema {
  collectionName: 'components_pages_team_member_lists';
  info: {
    displayName: 'TeamMemberList';
  };
  attributes: {
    featured_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
  };
}

export interface PagesTeamMemberRole extends Struct.ComponentSchema {
  collectionName: 'components_pages_team_member_roles';
  info: {
    displayName: 'TeamMemberRole';
    icon: 'crown';
  };
  attributes: {
    role_description: Schema.Attribute.String;
    role_name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface PagesTeamValue extends Struct.ComponentSchema {
  collectionName: 'components_pages_team_values';
  info: {
    displayName: 'TeamValueList';
  };
  attributes: {
    items: Schema.Attribute.Component<'pages.team-value-item', true>;
  };
}

export interface PagesTeamValueItem extends Struct.ComponentSchema {
  collectionName: 'components_pages_team_value_items';
  info: {
    displayName: 'TeamValueItem';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBriefBackground extends Struct.ComponentSchema {
  collectionName: 'components_shared_brief_backgrounds';
  info: {
    displayName: 'BriefBackground';
    icon: 'write';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedBusinessObjective extends Struct.ComponentSchema {
  collectionName: 'components_shared_business_objectives';
  info: {
    displayName: 'BusinessObjective';
    icon: 'pin';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_links';
  info: {
    displayName: 'ContactLink';
    icon: 'phone';
  };
  attributes: {
    contact_url: Schema.Attribute.String & Schema.Attribute.Required;
    platform: Schema.Attribute.Enumeration<
      [
        'linkedin',
        'x',
        'telegram',
        'email',
        'instagram',
        'facebook',
        'google',
        'zalo',
        'wechat',
        'weibo',
        'line',
        'viber',
        'whatsapp',
      ]
    > &
      Schema.Attribute.Required;
    platform_logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedGalleryImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_images';
  info: {
    displayName: 'GalleryImages';
  };
  attributes: {
    images: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'GalleryImage';
    icon: 'picture';
  };
  attributes: {
    alt_text: Schema.Attribute.String;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
    productPlatform: Schema.Attribute.Enumeration<['mobile', 'web', 'tablet']>;
  };
}

export interface SharedOutcome extends Struct.ComponentSchema {
  collectionName: 'components_shared_outcomes';
  info: {
    displayName: 'Outcome';
    icon: 'check';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    meta_description: Schema.Attribute.Text & Schema.Attribute.Required;
    meta_title: Schema.Attribute.String & Schema.Attribute.Required;
    share_image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSolution extends Struct.ComponentSchema {
  collectionName: 'components_shared_solutions';
  info: {
    displayName: 'Solution';
    icon: 'lightbulb';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    image_alt: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
    icon: 'chartCircle';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    author_company: Schema.Attribute.String;
    author_name: Schema.Attribute.String;
    author_role: Schema.Attribute.String;
    quote: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'pages.team-culture': PagesTeamCulture;
      'pages.team-experience': PagesTeamExperience;
      'pages.team-framework-and-tool': PagesTeamFrameworkAndTool;
      'pages.team-member-list': PagesTeamMemberList;
      'pages.team-member-role': PagesTeamMemberRole;
      'pages.team-value': PagesTeamValue;
      'pages.team-value-item': PagesTeamValueItem;
      'shared.brief-background': SharedBriefBackground;
      'shared.business-objective': SharedBusinessObjective;
      'shared.contact-link': SharedContactLink;
      'shared.gallery-images': SharedGalleryImages;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.outcome': SharedOutcome;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.solution': SharedSolution;
      'shared.stat': SharedStat;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
