declare namespace Form.queue.Main {
  namespace Omnichannelqueue {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "general_section_4"): Xrm.PageSection;
        get(name: "queue information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "incomingemailfilteringmethod"): Xrm.OptionSetAttribute<queue_incomingemailfilteringmethod>;
      get(name: "msdyn_isomnichannelqueue"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_operatinghourid"): Xrm.LookupAttribute<"msdyn_operatinghour">;
      get(name: "msdyn_priority"): Xrm.NumberAttribute;
      get(name: "msdyn_queuetype"): Xrm.OptionSetAttribute<msdyn_queuetype>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "queueviewtype"): Xrm.OptionSetAttribute<queue_queueviewtype>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Agents"): Xrm.SubGridControl<"systemuser">;
      get(name: "WebResource_ocpreviewterms"): Xrm.WebResourceControl;
      get(name: "header_incomingemailfilteringmethod"): Xrm.OptionSetControl<queue_incomingemailfilteringmethod>;
      get(name: "header_queueviewtype"): Xrm.OptionSetControl<queue_queueviewtype>;
      get(name: "msdyn_isomnichannelqueue"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_operatinghourid"): Xrm.LookupControl<"msdyn_operatinghour">;
      get(name: "msdyn_priority"): Xrm.NumberControl;
      get(name: "msdyn_queuetype"): Xrm.OptionSetControl<msdyn_queuetype>;
      get(name: "name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "queueviewtype"): Xrm.OptionSetControl<queue_queueviewtype>;
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
  interface Omnichannelqueue extends Xrm.PageBase<Omnichannelqueue.Attributes,Omnichannelqueue.Tabs,Omnichannelqueue.Controls> {
    getAttribute(attributeName: "incomingemailfilteringmethod"): Xrm.OptionSetAttribute<queue_incomingemailfilteringmethod>;
    getAttribute(attributeName: "msdyn_isomnichannelqueue"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_operatinghourid"): Xrm.LookupAttribute<"msdyn_operatinghour">;
    getAttribute(attributeName: "msdyn_priority"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_queuetype"): Xrm.OptionSetAttribute<msdyn_queuetype>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "queueviewtype"): Xrm.OptionSetAttribute<queue_queueviewtype>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Agents"): Xrm.SubGridControl<"systemuser">;
    getControl(controlName: "WebResource_ocpreviewterms"): Xrm.WebResourceControl;
    getControl(controlName: "header_incomingemailfilteringmethod"): Xrm.OptionSetControl<queue_incomingemailfilteringmethod>;
    getControl(controlName: "header_queueviewtype"): Xrm.OptionSetControl<queue_queueviewtype>;
    getControl(controlName: "msdyn_isomnichannelqueue"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_operatinghourid"): Xrm.LookupControl<"msdyn_operatinghour">;
    getControl(controlName: "msdyn_priority"): Xrm.NumberControl;
    getControl(controlName: "msdyn_queuetype"): Xrm.OptionSetControl<msdyn_queuetype>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "queueviewtype"): Xrm.OptionSetControl<queue_queueviewtype>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
