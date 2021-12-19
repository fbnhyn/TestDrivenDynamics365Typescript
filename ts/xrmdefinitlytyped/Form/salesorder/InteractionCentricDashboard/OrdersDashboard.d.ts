declare namespace Form.salesorder.InteractionCentricDashboard {
  namespace OrdersDashboard {
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
      get(name: "Component3b2e417"): Xrm.SubGridControl<"salesorder">;
      get(name: "Component4f7ae84"): Xrm.SubGridControl<"salesorder">;
      get(name: "Component76dd24a"): Xrm.SubGridControl<"salesorder">;
      get(name: "Componenta78a0f7"): Xrm.SubGridControl<"salesorder">;
      get(name: "Component{090ba867-4e83-a11b-00a0-d1226e1b88de}"): Xrm.BaseControl;
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
  interface OrdersDashboard extends Xrm.PageBase<OrdersDashboard.Attributes,OrdersDashboard.Tabs,OrdersDashboard.Controls> {
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Component3b2e417"): Xrm.SubGridControl<"salesorder">;
    getControl(controlName: "Component4f7ae84"): Xrm.SubGridControl<"salesorder">;
    getControl(controlName: "Component76dd24a"): Xrm.SubGridControl<"salesorder">;
    getControl(controlName: "Componenta78a0f7"): Xrm.SubGridControl<"salesorder">;
    getControl(controlName: "Component{090ba867-4e83-a11b-00a0-d1226e1b88de}"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
