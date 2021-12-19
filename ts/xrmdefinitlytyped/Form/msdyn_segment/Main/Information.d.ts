declare namespace Form.msdyn_segment.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_entityfieldname"): Xrm.Attribute<string>;
      get(name: "msdyn_entityfilter"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_objecttypecode"): Xrm.OptionSetAttribute<msdyn_segment_msdyn_objecttypecode>;
      get(name: "msdyn_sequence"): Xrm.LookupAttribute<"msdyn_sequence">;
      get(name: "msdyn_triggertype"): Xrm.OptionSetAttribute<msdyn_segment_msdyn_triggertype>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_entityfieldname"): Xrm.StringControl;
      get(name: "msdyn_entityfilter"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_objecttypecode"): Xrm.OptionSetControl<msdyn_segment_msdyn_objecttypecode>;
      get(name: "msdyn_sequence"): Xrm.LookupControl<"msdyn_sequence">;
      get(name: "msdyn_triggertype"): Xrm.OptionSetControl<msdyn_segment_msdyn_triggertype>;
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
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_entityfieldname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_entityfilter"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_objecttypecode"): Xrm.OptionSetAttribute<msdyn_segment_msdyn_objecttypecode>;
    getAttribute(attributeName: "msdyn_sequence"): Xrm.LookupAttribute<"msdyn_sequence">;
    getAttribute(attributeName: "msdyn_triggertype"): Xrm.OptionSetAttribute<msdyn_segment_msdyn_triggertype>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_entityfieldname"): Xrm.StringControl;
    getControl(controlName: "msdyn_entityfilter"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_objecttypecode"): Xrm.OptionSetControl<msdyn_segment_msdyn_objecttypecode>;
    getControl(controlName: "msdyn_sequence"): Xrm.LookupControl<"msdyn_sequence">;
    getControl(controlName: "msdyn_triggertype"): Xrm.OptionSetControl<msdyn_segment_msdyn_triggertype>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
