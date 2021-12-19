declare namespace Form.msdyn_entityconfiguration.Main {
  namespace MainForm {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_copygeodatafromurs"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_datefilter1fieldname"): Xrm.Attribute<string>;
      get(name: "msdyn_datefilter1lastxday"): Xrm.NumberAttribute;
      get(name: "msdyn_datefilter1nextxday"): Xrm.NumberAttribute;
      get(name: "msdyn_datefilter2fieldname"): Xrm.Attribute<string>;
      get(name: "msdyn_datefilter2lastxday"): Xrm.NumberAttribute;
      get(name: "msdyn_datefilter2nextxday"): Xrm.NumberAttribute;
      get(name: "msdyn_enabledas"): Xrm.OptionSetAttribute<msdyn_entityconfiguration_msdyn_enabledas>;
      get(name: "msdyn_enabletriggerfilters"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_entity"): Xrm.Attribute<string>;
      get(name: "msdyn_latitudefieldname"): Xrm.Attribute<string>;
      get(name: "msdyn_longitudefieldname"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_radius"): Xrm.NumberAttribute;
      get(name: "msdyn_timestampfieldname"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_copygeodatafromurs"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_datefilter1fieldname"): Xrm.StringControl;
      get(name: "msdyn_datefilter1lastxday"): Xrm.NumberControl;
      get(name: "msdyn_datefilter1nextxday"): Xrm.NumberControl;
      get(name: "msdyn_datefilter2fieldname"): Xrm.StringControl;
      get(name: "msdyn_datefilter2lastxday"): Xrm.NumberControl;
      get(name: "msdyn_datefilter2nextxday"): Xrm.NumberControl;
      get(name: "msdyn_enabledas"): Xrm.OptionSetControl<msdyn_entityconfiguration_msdyn_enabledas>;
      get(name: "msdyn_enabletriggerfilters"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_entity"): Xrm.StringControl;
      get(name: "msdyn_latitudefieldname"): Xrm.StringControl;
      get(name: "msdyn_longitudefieldname"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_radius"): Xrm.NumberControl;
      get(name: "msdyn_timestampfieldname"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface MainForm extends Xrm.PageBase<MainForm.Attributes,MainForm.Tabs,MainForm.Controls> {
    getAttribute(attributeName: "msdyn_copygeodatafromurs"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_datefilter1fieldname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_datefilter1lastxday"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_datefilter1nextxday"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_datefilter2fieldname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_datefilter2lastxday"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_datefilter2nextxday"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_enabledas"): Xrm.OptionSetAttribute<msdyn_entityconfiguration_msdyn_enabledas>;
    getAttribute(attributeName: "msdyn_enabletriggerfilters"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_entity"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_latitudefieldname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_longitudefieldname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_radius"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_timestampfieldname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_copygeodatafromurs"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_datefilter1fieldname"): Xrm.StringControl;
    getControl(controlName: "msdyn_datefilter1lastxday"): Xrm.NumberControl;
    getControl(controlName: "msdyn_datefilter1nextxday"): Xrm.NumberControl;
    getControl(controlName: "msdyn_datefilter2fieldname"): Xrm.StringControl;
    getControl(controlName: "msdyn_datefilter2lastxday"): Xrm.NumberControl;
    getControl(controlName: "msdyn_datefilter2nextxday"): Xrm.NumberControl;
    getControl(controlName: "msdyn_enabledas"): Xrm.OptionSetControl<msdyn_entityconfiguration_msdyn_enabledas>;
    getControl(controlName: "msdyn_enabletriggerfilters"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_entity"): Xrm.StringControl;
    getControl(controlName: "msdyn_latitudefieldname"): Xrm.StringControl;
    getControl(controlName: "msdyn_longitudefieldname"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_radius"): Xrm.NumberControl;
    getControl(controlName: "msdyn_timestampfieldname"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
