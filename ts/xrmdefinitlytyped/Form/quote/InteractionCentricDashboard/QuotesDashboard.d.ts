declare namespace Form.quote.InteractionCentricDashboard {
  namespace QuotesDashboard {
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
      get(name: "Component1fa0ac7"): Xrm.SubGridControl<"quote">;
      get(name: "Componentd0c08ed"): Xrm.SubGridControl<"quote">;
      get(name: "Componentd9535c7"): Xrm.SubGridControl<"quote">;
      get(name: "Componentfb531f0"): Xrm.SubGridControl<"quote">;
      get(name: "Component{a7e1d25d-3341-21dc-6d9c-082825699720}"): Xrm.BaseControl;
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
  interface QuotesDashboard extends Xrm.PageBase<QuotesDashboard.Attributes,QuotesDashboard.Tabs,QuotesDashboard.Controls> {
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Component1fa0ac7"): Xrm.SubGridControl<"quote">;
    getControl(controlName: "Componentd0c08ed"): Xrm.SubGridControl<"quote">;
    getControl(controlName: "Componentd9535c7"): Xrm.SubGridControl<"quote">;
    getControl(controlName: "Componentfb531f0"): Xrm.SubGridControl<"quote">;
    getControl(controlName: "Component{a7e1d25d-3341-21dc-6d9c-082825699720}"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
