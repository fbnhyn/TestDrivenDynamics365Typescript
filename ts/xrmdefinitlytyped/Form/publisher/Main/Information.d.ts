declare namespace Form.publisher.Main {
  namespace Information {
    namespace Tabs {
      interface E1F7A9C9A0E64C8BACBDC6610FBD2343 extends Xrm.SectionCollectionBase {
        get(name: "{6FE75F79-0CA8-4DBE-8C7B-6E68C17DE013}"): Xrm.PageSection;
        get(name: "{CBF04024-5749-444C-BC51-CFAF839688BF}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _70098AD5495611DD982E00188B01DCE6 extends Xrm.SectionCollectionBase {
        get(name: "description"): Xrm.PageSection;
        get(name: "{70098AD6-4956-11DD-982E-00188B01DCE6}"): Xrm.PageSection;
        get(name: "{eaf2edb4-7c5e-dd11-940f-00155d8ac303}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface solutionsmarketplace extends Xrm.SectionCollectionBase {
        get(name: "marketplacesection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "address1_telephone1"): Xrm.Attribute<string>;
      get(name: "customizationoptionvalueprefix"): Xrm.NumberAttribute;
      get(name: "customizationprefix"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress"): Xrm.Attribute<string>;
      get(name: "friendlyname"): Xrm.Attribute<string>;
      get(name: "supportingwebsiteurl"): Xrm.Attribute<string>;
      get(name: "uniquename"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_SolutionsMarketplace"): Xrm.IFrameControl;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "address1_telephone1"): Xrm.StringControl;
      get(name: "customizationoptionvalueprefix"): Xrm.NumberControl;
      get(name: "customizationprefix"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailaddress"): Xrm.StringControl;
      get(name: "friendlyname"): Xrm.StringControl;
      get(name: "preview_prefix"): Xrm.BaseControl;
      get(name: "supportingwebsiteurl"): Xrm.StringControl;
      get(name: "uniquename"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{E1F7A9C9-A0E6-4C8B-ACBD-C6610FBD2343}"): Xrm.PageTab<Tabs.E1F7A9C9A0E64C8BACBDC6610FBD2343>;
      get(name: "{70098AD5-4956-11DD-982E-00188B01DCE6}"): Xrm.PageTab<Tabs._70098AD5495611DD982E00188B01DCE6>;
      get(name: "solutions marketplace"): Xrm.PageTab<Tabs.solutionsmarketplace>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customizationoptionvalueprefix"): Xrm.NumberAttribute;
    getAttribute(attributeName: "customizationprefix"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "friendlyname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "supportingwebsiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_SolutionsMarketplace"): Xrm.IFrameControl;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "address1_telephone1"): Xrm.StringControl;
    getControl(controlName: "customizationoptionvalueprefix"): Xrm.NumberControl;
    getControl(controlName: "customizationprefix"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailaddress"): Xrm.StringControl;
    getControl(controlName: "friendlyname"): Xrm.StringControl;
    getControl(controlName: "preview_prefix"): Xrm.BaseControl;
    getControl(controlName: "supportingwebsiteurl"): Xrm.StringControl;
    getControl(controlName: "uniquename"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
