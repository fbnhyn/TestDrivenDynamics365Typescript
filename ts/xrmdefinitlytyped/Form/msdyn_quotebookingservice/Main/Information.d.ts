declare namespace Form.msdyn_quotebookingservice.Main {
  namespace Information {
    namespace Tabs {
      interface _66b308cff82144e8997a88593f18144f extends Xrm.SectionCollectionBase {
        get(name: "{66b308cf-f821-44e8-997a-88593f18144f}_column_3_section_1"): Xrm.PageSection;
        get(name: "{66b308cf-f821-44e8-997a-88593f18144f}_section_3"): Xrm.PageSection;
        get(name: "{8f706d5b-6cb5-4a94-a35a-8aadcf2d33f4}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedcostamount"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedsalesamount"): Xrm.NumberAttribute;
      get(name: "msdyn_minimumchargeamount"): Xrm.NumberAttribute;
      get(name: "msdyn_minimumchargeduration"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_quotebookingsetup"): Xrm.LookupAttribute<"msdyn_quotebookingsetup">;
      get(name: "msdyn_service"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitamount"): Xrm.NumberAttribute;
      get(name: "msdyn_unitcostamount"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_estimatedcostamount"): Xrm.NumberControl;
      get(name: "msdyn_estimatedsalesamount"): Xrm.NumberControl;
      get(name: "msdyn_minimumchargeamount"): Xrm.NumberControl;
      get(name: "msdyn_minimumchargeduration"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_quotebookingsetup"): Xrm.LookupControl<"msdyn_quotebookingsetup">;
      get(name: "msdyn_service"): Xrm.LookupControl<"product">;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitamount"): Xrm.NumberControl;
      get(name: "msdyn_unitcostamount"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{66b308cf-f821-44e8-997a-88593f18144f}"): Xrm.PageTab<Tabs._66b308cff82144e8997a88593f18144f>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedcostamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedsalesamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_minimumchargeamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_minimumchargeduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_quotebookingsetup"): Xrm.LookupAttribute<"msdyn_quotebookingsetup">;
    getAttribute(attributeName: "msdyn_service"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unitcostamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedcostamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedsalesamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_minimumchargeamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_minimumchargeduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_quotebookingsetup"): Xrm.LookupControl<"msdyn_quotebookingsetup">;
    getControl(controlName: "msdyn_service"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unitcostamount"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
