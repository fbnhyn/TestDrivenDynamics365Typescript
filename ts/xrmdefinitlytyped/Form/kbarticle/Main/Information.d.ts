declare namespace Form.kbarticle.Main {
  namespace Information {
    namespace Tabs {
      interface b641b7d4753cc99a5978977e6912e856 extends Xrm.SectionCollectionBase {
        get(name: "{493d7206-6935-e73d-75cc-44dc53d021e8}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Article Keywords"): Xrm.PageSection;
        get(name: "article information"): Xrm.PageSection;
        get(name: "kb-article description"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "articlexml"): Xrm.Attribute<string>;
      get(name: "keywords"): Xrm.Attribute<string>;
      get(name: "languagecode"): Xrm.NumberAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<kbarticle_statecode>;
      get(name: "subjectid"): Xrm.LookupAttribute<"subject">;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ArticleComments"): Xrm.SubGridControl<"kbarticlecomment">;
      get(name: "articlexmlcontrol"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<kbarticle_statecode>;
      get(name: "keywords"): Xrm.StringControl;
      get(name: "languagecode"): Xrm.Control<Xrm.NumberAttribute>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "subjectid"): Xrm.LookupControl<"subject">;
      get(name: "title"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{b641b7d4-753c-c99a-5978-977e6912e856}"): Xrm.PageTab<Tabs.b641b7d4753cc99a5978977e6912e856>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "articlexml"): Xrm.Attribute<string>;
    getAttribute(attributeName: "keywords"): Xrm.Attribute<string>;
    getAttribute(attributeName: "languagecode"): Xrm.NumberAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<kbarticle_statecode>;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"subject">;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ArticleComments"): Xrm.SubGridControl<"kbarticlecomment">;
    getControl(controlName: "articlexmlcontrol"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<kbarticle_statecode>;
    getControl(controlName: "keywords"): Xrm.StringControl;
    getControl(controlName: "languagecode"): Xrm.Control<Xrm.NumberAttribute>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "subjectid"): Xrm.LookupControl<"subject">;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
