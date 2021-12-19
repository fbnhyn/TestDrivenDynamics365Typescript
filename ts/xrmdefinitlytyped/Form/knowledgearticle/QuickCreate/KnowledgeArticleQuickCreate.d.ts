declare namespace Form.knowledgearticle.QuickCreate {
  namespace KnowledgeArticleQuickCreate {
    namespace Tabs {
      interface newKnowledgeArticle extends Xrm.SectionCollectionBase {
        get(name: "quickKnowledgeArticle"): Xrm.PageSection;
        get(name: "quickKnowledgecontent"): Xrm.PageSection;
        get(name: "quickKnowledgeowner"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "expirationdate"): Xrm.DateAttribute | null;
      get(name: "expiredreviewoptions"): Xrm.OptionSetAttribute<knowledgearticle_expiredreviewoptions> | null;
      get(name: "keywords"): Xrm.Attribute<string>;
      get(name: "languagelocaleid"): Xrm.LookupAttribute<"languagelocale">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "primaryauthorid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "readyforreview"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "review"): Xrm.OptionSetAttribute<knowledgearticle_review> | null;
      get(name: "setproductassociations"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "subjectid"): Xrm.LookupAttribute<"subject"> | null;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: "updatecontent"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_expirationdate"): Xrm.DateControl | null;
      get(name: "header_process_expirationdate_1"): Xrm.DateControl | null;
      get(name: "header_process_expirationdate_2"): Xrm.DateControl | null;
      get(name: "header_process_expirationdate_3"): Xrm.DateControl | null;
      get(name: "header_process_expiredreviewoptions"): Xrm.OptionSetControl<knowledgearticle_expiredreviewoptions> | null;
      get(name: "header_process_keywords"): Xrm.StringControl | null;
      get(name: "header_process_languagelocaleid"): Xrm.LookupControl<"languagelocale"> | null;
      get(name: "header_process_primaryauthorid"): Xrm.LookupControl<"systemuser"> | null;
      get(name: "header_process_readyforreview"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_review"): Xrm.OptionSetControl<knowledgearticle_review> | null;
      get(name: "header_process_setproductassociations"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_setproductassociations_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_setproductassociations_2"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_setproductassociations_3"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_subjectid"): Xrm.LookupControl<"subject"> | null;
      get(name: "header_process_updatecontent"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_updatecontent_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "languagelocaleid"): Xrm.LookupControl<"languagelocale">;
      get(name: "quick_description"): Xrm.StringControl;
      get(name: "quick_keywords"): Xrm.StringControl;
      get(name: "quick_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "quick_primaryauthorid"): Xrm.LookupControl<"systemuser">;
      get(name: "quick_title"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "newKnowledgeArticle"): Xrm.PageTab<Tabs.newKnowledgeArticle>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface KnowledgeArticleQuickCreate extends Xrm.PageBase<KnowledgeArticleQuickCreate.Attributes,KnowledgeArticleQuickCreate.Tabs,KnowledgeArticleQuickCreate.Controls> {
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "expirationdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "expiredreviewoptions"): Xrm.OptionSetAttribute<knowledgearticle_expiredreviewoptions> | null;
    getAttribute(attributeName: "keywords"): Xrm.Attribute<string>;
    getAttribute(attributeName: "languagelocaleid"): Xrm.LookupAttribute<"languagelocale">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "primaryauthorid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "readyforreview"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "review"): Xrm.OptionSetAttribute<knowledgearticle_review> | null;
    getAttribute(attributeName: "setproductassociations"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"subject"> | null;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "updatecontent"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_process_expirationdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_expirationdate_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_expirationdate_2"): Xrm.DateControl | null;
    getControl(controlName: "header_process_expirationdate_3"): Xrm.DateControl | null;
    getControl(controlName: "header_process_expiredreviewoptions"): Xrm.OptionSetControl<knowledgearticle_expiredreviewoptions> | null;
    getControl(controlName: "header_process_keywords"): Xrm.StringControl | null;
    getControl(controlName: "header_process_languagelocaleid"): Xrm.LookupControl<"languagelocale"> | null;
    getControl(controlName: "header_process_primaryauthorid"): Xrm.LookupControl<"systemuser"> | null;
    getControl(controlName: "header_process_readyforreview"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_review"): Xrm.OptionSetControl<knowledgearticle_review> | null;
    getControl(controlName: "header_process_setproductassociations"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_setproductassociations_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_setproductassociations_2"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_setproductassociations_3"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_subjectid"): Xrm.LookupControl<"subject"> | null;
    getControl(controlName: "header_process_updatecontent"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_updatecontent_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "languagelocaleid"): Xrm.LookupControl<"languagelocale">;
    getControl(controlName: "quick_description"): Xrm.StringControl;
    getControl(controlName: "quick_keywords"): Xrm.StringControl;
    getControl(controlName: "quick_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "quick_primaryauthorid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "quick_title"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
