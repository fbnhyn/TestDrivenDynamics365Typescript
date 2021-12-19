declare namespace Form.socialprofile.Quick {
  namespace SocialProfileReferencePanel {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "blocked"): Xrm.OptionSetAttribute<boolean>;
      get(name: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "influencescore"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "profilefullname"): Xrm.Attribute<string>;
      get(name: "profilelink"): Xrm.Attribute<string>;
      get(name: "profilename"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "blocked"): Xrm.OptionSetControl<boolean>;
      get(name: "community"): Xrm.OptionSetControl<socialprofile_community>;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "influencescore"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "profilefullname"): Xrm.StringControl;
      get(name: "profilelink"): Xrm.StringControl;
      get(name: "profilename"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SocialProfileReferencePanel extends Xrm.PageBase<SocialProfileReferencePanel.Attributes,SocialProfileReferencePanel.Tabs,SocialProfileReferencePanel.Controls> {
    getAttribute(attributeName: "blocked"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "influencescore"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "profilefullname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "profilelink"): Xrm.Attribute<string>;
    getAttribute(attributeName: "profilename"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "blocked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "community"): Xrm.OptionSetControl<socialprofile_community>;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "influencescore"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "profilefullname"): Xrm.StringControl;
    getControl(controlName: "profilelink"): Xrm.StringControl;
    getControl(controlName: "profilename"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
