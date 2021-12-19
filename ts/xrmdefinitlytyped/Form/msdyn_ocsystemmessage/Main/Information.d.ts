declare namespace Form.msdyn_ocsystemmessage.Main {
  namespace Information {
    namespace Tabs {
      interface MessageTemplate_GeneralTab extends Xrm.SectionCollectionBase {
        get(name: "MessageTemplate_LocalizationDataGridSection"): Xrm.PageSection;
        get(name: "{f86c374b-46e7-4b2f-9bc6-2d41e13aafe2}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_messagedescription"): Xrm.Attribute<string>;
      get(name: "msdyn_messagereceiver"): Xrm.OptionSetAttribute<msdyn_ocmessagereceiver>;
      get(name: "msdyn_messagetype"): Xrm.OptionSetAttribute<msdyn_ocsystemmessagetype>;
      get(name: "msdyn_msdyn_instanceid"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_streamsource"): Xrm.OptionSetAttribute<msdyn_streamsource>;
      get(name: "msdyn_systemmessageeventtype"): Xrm.OptionSetAttribute<msdyn_ocsystemmessageeventtype>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "MessageTemplate_LocalizationDataGrid"): Xrm.SubGridControl<"msdyn_oclocalizationdata">;
      get(name: "msdyn_messagedescription"): Xrm.StringControl;
      get(name: "msdyn_messagereceiver"): Xrm.OptionSetControl<msdyn_ocmessagereceiver>;
      get(name: "msdyn_messagetype"): Xrm.OptionSetControl<msdyn_ocsystemmessagetype>;
      get(name: "msdyn_msdyn_instanceid"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_streamsource"): Xrm.OptionSetControl<msdyn_streamsource>;
      get(name: "msdyn_systemmessageeventtype"): Xrm.OptionSetControl<msdyn_ocsystemmessageeventtype>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "MessageTemplate_GeneralTab"): Xrm.PageTab<Tabs.MessageTemplate_GeneralTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_messagedescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_messagereceiver"): Xrm.OptionSetAttribute<msdyn_ocmessagereceiver>;
    getAttribute(attributeName: "msdyn_messagetype"): Xrm.OptionSetAttribute<msdyn_ocsystemmessagetype>;
    getAttribute(attributeName: "msdyn_msdyn_instanceid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_streamsource"): Xrm.OptionSetAttribute<msdyn_streamsource>;
    getAttribute(attributeName: "msdyn_systemmessageeventtype"): Xrm.OptionSetAttribute<msdyn_ocsystemmessageeventtype>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "MessageTemplate_LocalizationDataGrid"): Xrm.SubGridControl<"msdyn_oclocalizationdata">;
    getControl(controlName: "msdyn_messagedescription"): Xrm.StringControl;
    getControl(controlName: "msdyn_messagereceiver"): Xrm.OptionSetControl<msdyn_ocmessagereceiver>;
    getControl(controlName: "msdyn_messagetype"): Xrm.OptionSetControl<msdyn_ocsystemmessagetype>;
    getControl(controlName: "msdyn_msdyn_instanceid"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_streamsource"): Xrm.OptionSetControl<msdyn_streamsource>;
    getControl(controlName: "msdyn_systemmessageeventtype"): Xrm.OptionSetControl<msdyn_ocsystemmessageeventtype>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
