declare namespace Form.entitlement.Main {
  namespace Entitlement {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "contacts"): Xrm.PageSection;
        get(name: "entitlementapplications"): Xrm.PageSection;
        get(name: "entitlementterms"): Xrm.PageSection;
        get(name: "entitlementtermsInUCI"): Xrm.PageSection;
        get(name: "entitlementterms_2"): Xrm.PageSection;
        get(name: "fieldservice"): Xrm.PageSection;
        get(name: "information"): Xrm.PageSection;
        get(name: "notes"): Xrm.PageSection;
        get(name: "products"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "allocationtypecode"): Xrm.OptionSetAttribute<entitlement_allocationtype>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "decreaseremainingon"): Xrm.OptionSetAttribute<entitlement_decreaseremainingon>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "enddate"): Xrm.DateAttribute;
      get(name: "entitytype"): Xrm.OptionSetAttribute<entitytype>;
      get(name: "isdefault"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_appliesto"): Xrm.OptionSetAttribute<msdyn_entitlementappliesto>;
      get(name: "msdyn_entitlementprioritization"): Xrm.NumberAttribute;
      get(name: "msdyn_percentdiscount"): Xrm.NumberAttribute;
      get(name: "msdyn_pricelisttoapply"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "remainingterms"): Xrm.NumberAttribute;
      get(name: "restrictcasecreation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "slaid"): Xrm.LookupAttribute<"sla">;
      get(name: "startdate"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<entitlement_statecode>;
      get(name: "totalterms"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "allocationtypecode"): Xrm.OptionSetControl<entitlement_allocationtype>;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "decreaseremainingon"): Xrm.OptionSetControl<entitlement_decreaseremainingon>;
      get(name: "description"): Xrm.StringControl;
      get(name: "editableEntitlementChannelGridControl"): Xrm.BaseControl;
      get(name: "enddate"): Xrm.DateControl;
      get(name: "entitytype"): Xrm.OptionSetControl<entitytype>;
      get(name: "grid_EntitlementApplications"): Xrm.SubGridControl<"msdyn_entitlementapplication">;
      get(name: "grid_EntitlementChannel"): Xrm.SubGridControl<"entitlementchannel">;
      get(name: "grid_EntitlementContacts"): Xrm.SubGridControl<"contact">;
      get(name: "grid_EntitlementProducts"): Xrm.SubGridControl<"product">;
      get(name: "header_customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "header_enddate"): Xrm.DateControl;
      get(name: "header_remainingterms"): Xrm.NumberControl;
      get(name: "header_statecode"): Xrm.OptionSetControl<entitlement_statecode>;
      get(name: "isdefault"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_appliesto"): Xrm.OptionSetControl<msdyn_entitlementappliesto>;
      get(name: "msdyn_entitlementprioritization"): Xrm.NumberControl;
      get(name: "msdyn_percentdiscount"): Xrm.NumberControl;
      get(name: "msdyn_pricelisttoapply"): Xrm.LookupControl<"pricelevel">;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "remainingterms"): Xrm.NumberControl;
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
  interface Entitlement extends Xrm.PageBase<Entitlement.Attributes,Entitlement.Tabs,Entitlement.Controls> {
    getAttribute(attributeName: "allocationtypecode"): Xrm.OptionSetAttribute<entitlement_allocationtype>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "decreaseremainingon"): Xrm.OptionSetAttribute<entitlement_decreaseremainingon>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "enddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "entitytype"): Xrm.OptionSetAttribute<entitytype>;
    getAttribute(attributeName: "isdefault"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_appliesto"): Xrm.OptionSetAttribute<msdyn_entitlementappliesto>;
    getAttribute(attributeName: "msdyn_entitlementprioritization"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_percentdiscount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_pricelisttoapply"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "remainingterms"): Xrm.NumberAttribute;
    getAttribute(attributeName: "restrictcasecreation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "slaid"): Xrm.LookupAttribute<"sla">;
    getAttribute(attributeName: "startdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<entitlement_statecode>;
    getAttribute(attributeName: "totalterms"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "allocationtypecode"): Xrm.OptionSetControl<entitlement_allocationtype>;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "decreaseremainingon"): Xrm.OptionSetControl<entitlement_decreaseremainingon>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "editableEntitlementChannelGridControl"): Xrm.BaseControl;
    getControl(controlName: "enddate"): Xrm.DateControl;
    getControl(controlName: "entitytype"): Xrm.OptionSetControl<entitytype>;
    getControl(controlName: "grid_EntitlementApplications"): Xrm.SubGridControl<"msdyn_entitlementapplication">;
    getControl(controlName: "grid_EntitlementChannel"): Xrm.SubGridControl<"entitlementchannel">;
    getControl(controlName: "grid_EntitlementContacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "grid_EntitlementProducts"): Xrm.SubGridControl<"product">;
    getControl(controlName: "header_customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "header_enddate"): Xrm.DateControl;
    getControl(controlName: "header_remainingterms"): Xrm.NumberControl;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<entitlement_statecode>;
    getControl(controlName: "isdefault"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_appliesto"): Xrm.OptionSetControl<msdyn_entitlementappliesto>;
    getControl(controlName: "msdyn_entitlementprioritization"): Xrm.NumberControl;
    getControl(controlName: "msdyn_percentdiscount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_pricelisttoapply"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "remainingterms"): Xrm.NumberControl;
    getControl(controlName: "restrictcasecreation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "slaid"): Xrm.LookupControl<"sla">;
    getControl(controlName: "startdate"): Xrm.DateControl;
    getControl(controlName: "totalterms"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
