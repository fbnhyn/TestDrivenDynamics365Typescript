declare namespace Form.msdyn_knowledgearticletemplate.Main {
  namespace Mainform {
    namespace Tabs {
      interface _92e59ee7820a42fc907ff86d2c4677c2 extends Xrm.SectionCollectionBase {
        get(name: "Content"): Xrm.PageSection;
        get(name: "{92e59ee7-820a-42fc-907f-f86d2c4677c2}_section_1"): Xrm.PageSection;
        get(name: "{92e59ee7-820a-42fc-907f-f86d2c4677c2}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_LanguageLocaleIdName"): Xrm.Attribute<string>;
      get(name: "msdyn_content"): Xrm.Attribute<string>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_isinternal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_keywords"): Xrm.Attribute<string>;
      get(name: "msdyn_languagelocaleid"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_subjectid"): Xrm.LookupAttribute<"subject">;
      get(name: "msdyn_title"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_msdyn_LanguageLocaleIdName"): Xrm.StringControl;
      get(name: "msdyn_content"): Xrm.StringControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_isinternal"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_keywords"): Xrm.StringControl;
      get(name: "msdyn_languagelocaleid"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_subjectid"): Xrm.LookupControl<"subject">;
      get(name: "msdyn_title"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{92e59ee7-820a-42fc-907f-f86d2c4677c2}"): Xrm.PageTab<Tabs._92e59ee7820a42fc907ff86d2c4677c2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Mainform extends Xrm.PageBase<Mainform.Attributes,Mainform.Tabs,Mainform.Controls> {
    getAttribute(attributeName: "msdyn_LanguageLocaleIdName"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_content"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_isinternal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_keywords"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_languagelocaleid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_subjectid"): Xrm.LookupAttribute<"subject">;
    getAttribute(attributeName: "msdyn_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_msdyn_LanguageLocaleIdName"): Xrm.StringControl;
    getControl(controlName: "msdyn_content"): Xrm.StringControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_isinternal"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_keywords"): Xrm.StringControl;
    getControl(controlName: "msdyn_languagelocaleid"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_subjectid"): Xrm.LookupControl<"subject">;
    getControl(controlName: "msdyn_title"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
