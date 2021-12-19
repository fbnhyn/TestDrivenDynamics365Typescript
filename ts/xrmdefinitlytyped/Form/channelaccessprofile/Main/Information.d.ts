declare namespace Form.channelaccessprofile.Main {
  namespace Information {
    namespace Tabs {
      interface ChannelAccess extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface EntityPermissions extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface KnowledgeSettings extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_4_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Note extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "emailaccess"): Xrm.OptionSetAttribute<boolean>;
      get(name: "facebookaccess"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "phoneaccess"): Xrm.OptionSetAttribute<boolean>;
      get(name: "rateknowledgearticles"): Xrm.OptionSetAttribute<boolean>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<channelaccessprofile_statuscode>;
      get(name: "submitfeedback"): Xrm.OptionSetAttribute<boolean>;
      get(name: "twitteraccess"): Xrm.OptionSetAttribute<boolean>;
      get(name: "viewarticlerating"): Xrm.OptionSetAttribute<boolean>;
      get(name: "viewknowledgearticles"): Xrm.OptionSetAttribute<boolean>;
      get(name: "webaccess"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RateKnowledgeArticles"): Xrm.OptionSetControl<boolean>;
      get(name: "Role_Control"): Xrm.IFrameControl;
      get(name: "SubmitFeedback"): Xrm.OptionSetControl<boolean>;
      get(name: "ViewArticleRating"): Xrm.OptionSetControl<boolean>;
      get(name: "ViewKnowledgeArticles"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaccess"): Xrm.OptionSetControl<boolean>;
      get(name: "facebookaccess"): Xrm.OptionSetControl<boolean>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<channelaccessprofile_statuscode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "phoneaccess"): Xrm.OptionSetControl<boolean>;
      get(name: "twitteraccess"): Xrm.OptionSetControl<boolean>;
      get(name: "webaccess"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ChannelAccess"): Xrm.PageTab<Tabs.ChannelAccess>;
      get(name: "EntityPermissions"): Xrm.PageTab<Tabs.EntityPermissions>;
      get(name: "KnowledgeSettings"): Xrm.PageTab<Tabs.KnowledgeSettings>;
      get(name: "Note"): Xrm.PageTab<Tabs.Note>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "emailaccess"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "facebookaccess"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "phoneaccess"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "rateknowledgearticles"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<channelaccessprofile_statuscode>;
    getAttribute(attributeName: "submitfeedback"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "twitteraccess"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "viewarticlerating"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "viewknowledgearticles"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "webaccess"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RateKnowledgeArticles"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "Role_Control"): Xrm.IFrameControl;
    getControl(controlName: "SubmitFeedback"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "ViewArticleRating"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "ViewKnowledgeArticles"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaccess"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "facebookaccess"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<channelaccessprofile_statuscode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "phoneaccess"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "twitteraccess"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "webaccess"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
