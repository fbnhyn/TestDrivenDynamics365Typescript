declare namespace Form.activitypointer.InteractionCentricDashboard {
  namespace ActivitiesDashboard {
    namespace Tabs {
      interface StreamsContainer extends Xrm.SectionCollectionBase {
        get(name: "Streams"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Component002d99d"): Xrm.SubGridControl<"activitypointer">;
      get(name: "Component0f6d343"): Xrm.SubGridControl<"activitypointer">;
      get(name: "Component3a4e804"): Xrm.SubGridControl<"activitypointer">;
      get(name: "Component41be97b"): Xrm.SubGridControl<"activitypointer">;
      get(name: "Component{c79d4d57-85b1-1b7c-3deb-17cd716911cd}"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StreamsContainer"): Xrm.PageTab<Tabs.StreamsContainer>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ActivitiesDashboard extends Xrm.PageBase<ActivitiesDashboard.Attributes,ActivitiesDashboard.Tabs,ActivitiesDashboard.Controls> {
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Component002d99d"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "Component0f6d343"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "Component3a4e804"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "Component41be97b"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "Component{c79d4d57-85b1-1b7c-3deb-17cd716911cd}"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
