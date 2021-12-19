declare namespace Form.msdyn_iotalert.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_alerttime"): Xrm.DateAttribute;
      get(name: "msdyn_alerttype"): Xrm.OptionSetAttribute<msdyn_iotalert_msdyn_alerttype>;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_device"): Xrm.LookupAttribute<"msdyn_iotdevice">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_msdyn_alerttime"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_alerttime_1"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset"> | null;
      get(name: "header_process_msdyn_description"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_description_1"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice"> | null;
      get(name: "msdyn_alerttime"): Xrm.DateControl;
      get(name: "msdyn_alerttype"): Xrm.OptionSetControl<msdyn_iotalert_msdyn_alerttype>;
      get(name: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice">;
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
    getAttribute(attributeName: "msdyn_alerttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_alerttype"): Xrm.OptionSetAttribute<msdyn_iotalert_msdyn_alerttype>;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_device"): Xrm.LookupAttribute<"msdyn_iotdevice">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_process_msdyn_alerttime"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_alerttime_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset"> | null;
    getControl(controlName: "header_process_msdyn_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_description_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice"> | null;
    getControl(controlName: "msdyn_alerttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_alerttype"): Xrm.OptionSetControl<msdyn_iotalert_msdyn_alerttype>;
    getControl(controlName: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
