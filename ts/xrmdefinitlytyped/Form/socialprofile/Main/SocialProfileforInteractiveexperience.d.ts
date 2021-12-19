declare namespace Form.socialprofile.Main {
  namespace SocialProfileforInteractiveexperience {
    namespace Tabs {
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: "tab_2_section_3"): Xrm.PageSection;
        get(name: "tab_2_section_4"): Xrm.PageSection;
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
      get(name: "msdyn_ocfollowercount"): Xrm.NumberAttribute;
      get(name: "msdyn_ocfollowingcount"): Xrm.NumberAttribute;
      get(name: "msdyn_ocfriendcount"): Xrm.NumberAttribute;
      get(name: "msdyn_phonenumber"): Xrm.Attribute<string>;
      get(name: "msdyn_profileimagelink"): Xrm.Attribute<string>;
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
      get(name: "header_community"): Xrm.OptionSetControl<socialprofile_community>;
      get(name: "header_influencescore"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_ocfollowercount"): Xrm.NumberControl;
      get(name: "msdyn_ocfollowingcount"): Xrm.NumberControl;
      get(name: "msdyn_ocfriendcount"): Xrm.NumberControl;
      get(name: "msdyn_phonenumber"): Xrm.StringControl;
      get(name: "msdyn_profileimagelink"): Xrm.StringControl;
      get(name: "profilefullname"): Xrm.StringControl;
      get(name: "profilelink"): Xrm.StringControl;
      get(name: "profilename"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SocialProfileforInteractiveexperience extends Xrm.PageBase<SocialProfileforInteractiveexperience.Attributes,SocialProfileforInteractiveexperience.Tabs,SocialProfileforInteractiveexperience.Controls> {
    getAttribute(attributeName: "blocked"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "influencescore"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_ocfollowercount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_ocfollowingcount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_ocfriendcount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_phonenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_profileimagelink"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "profilefullname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "profilelink"): Xrm.Attribute<string>;
    getAttribute(attributeName: "profilename"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "blocked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "community"): Xrm.OptionSetControl<socialprofile_community>;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "header_community"): Xrm.OptionSetControl<socialprofile_community>;
    getControl(controlName: "header_influencescore"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_ocfollowercount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_ocfollowingcount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_ocfriendcount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_phonenumber"): Xrm.StringControl;
    getControl(controlName: "msdyn_profileimagelink"): Xrm.StringControl;
    getControl(controlName: "profilefullname"): Xrm.StringControl;
    getControl(controlName: "profilelink"): Xrm.StringControl;
    getControl(controlName: "profilename"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
