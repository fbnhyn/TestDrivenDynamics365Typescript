declare namespace Form.emailsignature.Main {
  namespace Emailsignature {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Details"): Xrm.PageSection;
        get(name: "Details_UCI"): Xrm.PageSection;
        get(name: "Signature Editor"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "isdefault"): Xrm.OptionSetAttribute<boolean>;
      get(name: "languagecode"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "safehtml"): Xrm.Attribute<string>;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "isdefault"): Xrm.OptionSetControl<boolean>;
      get(name: "language"): Xrm.Control<Xrm.NumberAttribute>;
      get(name: "languagecode"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "safehtml"): Xrm.StringControl;
      get(name: "title"): Xrm.StringControl;
      get(name: "title1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Emailsignature extends Xrm.PageBase<Emailsignature.Attributes,Emailsignature.Tabs,Emailsignature.Controls> {
    getAttribute(attributeName: "isdefault"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "languagecode"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "safehtml"): Xrm.Attribute<string>;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "isdefault"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "language"): Xrm.Control<Xrm.NumberAttribute>;
    getControl(controlName: "languagecode"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "safehtml"): Xrm.StringControl;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: "title1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
