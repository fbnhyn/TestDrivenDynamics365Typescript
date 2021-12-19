declare namespace Form.msdyn_iotfieldmapping.Main {
  namespace Information {
    namespace Tabs {
      interface _4d9e1adbe5b9421599ce9028ec28edf5 extends Xrm.SectionCollectionBase {
        get(name: "{4d9e1adb-e5b9-4215-99ce-9028ec28edf5}_section_2"): Xrm.PageSection;
        get(name: "{f16376e7-2baa-42d4-9a1a-3443cf1688c0}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_directpathorkeypath"): Xrm.Attribute<string>;
      get(name: "msdyn_fielddataformat"): Xrm.OptionSetAttribute<msdyn_iotfielddataformat>;
      get(name: "msdyn_fieldname"): Xrm.Attribute<string>;
      get(name: "msdyn_mappingtype"): Xrm.OptionSetAttribute<msdyn_iotmappingtype>;
      get(name: "msdyn_modelinputfieldname"): Xrm.Attribute<string>;
      get(name: "msdyn_searchtype"): Xrm.OptionSetAttribute<msdyn_iotsearchtype>;
      get(name: "msdyn_valuepath"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_directpathorkeypath"): Xrm.StringControl;
      get(name: "msdyn_fielddataformat"): Xrm.OptionSetControl<msdyn_iotfielddataformat>;
      get(name: "msdyn_fieldname"): Xrm.StringControl;
      get(name: "msdyn_mappingtype"): Xrm.OptionSetControl<msdyn_iotmappingtype>;
      get(name: "msdyn_modelinputfieldname"): Xrm.StringControl;
      get(name: "msdyn_searchtype"): Xrm.OptionSetControl<msdyn_iotsearchtype>;
      get(name: "msdyn_valuepath"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{4d9e1adb-e5b9-4215-99ce-9028ec28edf5}"): Xrm.PageTab<Tabs._4d9e1adbe5b9421599ce9028ec28edf5>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_directpathorkeypath"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_fielddataformat"): Xrm.OptionSetAttribute<msdyn_iotfielddataformat>;
    getAttribute(attributeName: "msdyn_fieldname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_mappingtype"): Xrm.OptionSetAttribute<msdyn_iotmappingtype>;
    getAttribute(attributeName: "msdyn_modelinputfieldname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_searchtype"): Xrm.OptionSetAttribute<msdyn_iotsearchtype>;
    getAttribute(attributeName: "msdyn_valuepath"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_directpathorkeypath"): Xrm.StringControl;
    getControl(controlName: "msdyn_fielddataformat"): Xrm.OptionSetControl<msdyn_iotfielddataformat>;
    getControl(controlName: "msdyn_fieldname"): Xrm.StringControl;
    getControl(controlName: "msdyn_mappingtype"): Xrm.OptionSetControl<msdyn_iotmappingtype>;
    getControl(controlName: "msdyn_modelinputfieldname"): Xrm.StringControl;
    getControl(controlName: "msdyn_searchtype"): Xrm.OptionSetControl<msdyn_iotsearchtype>;
    getControl(controlName: "msdyn_valuepath"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
