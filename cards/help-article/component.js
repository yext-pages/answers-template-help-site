{{> cards/card_component componentName='help-article' }}

class help_articleCardComponent extends BaseCard['help-article'] {
  constructor(config = {}, systemConfig = {}) {
    super(config, systemConfig);
  }

  /**
   * This returns an object that will be called `card`
   * in the template. Put all mapping logic here.
   *
   * @param profile profile of the entity in the card
   */
  dataForRender(profile) {
    return {
      title: profile.name, // The header text of the card
      url: profile.website || profile.landingPageUrl, // If the card title is a clickable link, set URL here
      target: '_top', // If the title's URL should open in a new tab, etc.
      titleEventOptions: this.addDefaultEventOptions(),
      subtitle: profile.c_updatedDate ? `Last Updated on  ${profile.c_updatedDate}`: '', // The sub-header text of the card
      // If the card's details are longer than a certain character count, you can truncate the
      // text. A toggle will be supplied that can show or hide the truncated text.
      // showMoreDetails: {
      //   showMoreLimit: 750, // Character count limit
      //   showMoreText: 'Show more', // Label when toggle will show truncated text
      //   showLessText: 'Show less' // Label when toggle will hide truncated text
      // },
      details: Formatter.highlightField(profile.d_highlightedFields.s_snippet.value,
      profile.d_highlightedFields.s_snippet.matchedSubstrings)
    };
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'cards/help-article';
  }
}

ANSWERS.registerTemplate(
  'cards/help-article',
  {{{stringifyPartial (read 'cards/help-article/template') }}}
);
ANSWERS.registerComponentType(help_articleCardComponent);
