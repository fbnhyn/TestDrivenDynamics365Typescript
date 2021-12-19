declare namespace Form.entitlementtemplate.Main {
  namespace EntitlementTemplate {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "entitlementtemplateterms"): Xrm.PageSection;
        get(name: "entitlementtemplatetermsInUCI"): Xrm.PageSection;
        get(name: "entitlementterms"): Xrm.PageSection;
        get(name: "information"): Xrm.PageSection;
        get(name: "products"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "allocationtypecode"): Xrm.OptionSetAttribute<entitlementtemplate_allocationtype>;
      get(name: "decreaseremainingon"): Xrm.OptionSetAttribute<entitlementtemplate_decreaseremainingon>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "enddate"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "restrictcasecreation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "slaid"): Xrm.LookupAttribute<"sla">;
      get(name: "startdate"): Xrm.DateAttribute;
      get(name: "totalterms"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "allocationtypecode"): Xrm.OptionSetControl<entitlementtemplate_allocationtype>;
      get(name: "decreaseremainingon"): Xrm.OptionSetControl<entitlementtemplate_decreaseremainingon>;
      get(name: "description"): Xrm.StringControl;
      get(name: "editableEntitlementChannelGridControl"): Xrm.BaseControl;
      get(name: "enddate"): Xrm.DateControl;
      get(name: "grid_EntitlementChannel"): Xrm.SubGridControl<"entitlementtemplatechannel">;
      get(name: "grid_EntitlementProducts"): Xrm.SubGridControl<"product">;
      get(name: "name"): Xrm.StringControl;
      get(name: "restrictcasecreation"): Xrm.OptionSetControl<boolean>;
      get(name: "slaid"): Xrm.LookupControl<"sla">;
      get(name: "startdate"): Xrm.DateControl;
      get(name: "totalterms"): Xrm.NumberControl;
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
  interface EntitlementTemplate extends Xrm.PageBase<EntitlementTemplate.Attributes,EntitlementTemplate.Tabs,EntitlementTemplate.Controls> {
    getAttribute(attributeName: "allocationtypecode"): Xrm.OptionSetAttribute<entitlementtemplate_allocationtype>;
    getAttribute(attributeName: "decreaseremainingon"): Xrm.OptionSetAttribute<entitlementtemplate_decreaseremainingon>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "enddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "restrictcasecreation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "slaid"): Xrm.LookupAttribute<"sla">;
    getAttribute(attributeName: "startdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "totalterms"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "allocationtypecode"): Xrm.OptionSetControl<entitlementtemplate_allocationtype>;
    getControl(controlName: "decreaseremainingon"): Xrm.OptionSetControl<entitlementtemplate_decreaseremainingon>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "editableEntitlementChannelGridControl"): Xrm.BaseControl;
    getControl(controlName: "enddate"): Xrm.DateControl;
    getControl(controlName: "grid_EntitlementChannel"): Xrm.SubGridControl<"entitlementtemplatechannel">;
    getControl(controlName: "grid_EntitlementProducts"): Xrm.SubGridControl<"product">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "restrictcasecreation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "slaid"): Xrm.LookupControl<"sla">;
    getControl(controlName: "startdate"): Xrm.DateControl;
    getControl(controlName: "totalterms"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
