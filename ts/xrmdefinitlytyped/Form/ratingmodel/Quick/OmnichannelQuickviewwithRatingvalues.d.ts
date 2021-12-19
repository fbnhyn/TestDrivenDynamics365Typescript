declare namespace Form.ratingmodel.Quick {
  namespace OmnichannelQuickviewwithRatingvalues {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "maxratingvalue"): Xrm.NumberAttribute;
      get(name: "minratingvalue"): Xrm.NumberAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Rating_Values"): Xrm.SubGridControl<"ratingvalue">;
      get(name: "maxratingvalue"): Xrm.NumberControl;
      get(name: "minratingvalue"): Xrm.NumberControl;
      get(name: "name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface OmnichannelQuickviewwithRatingvalues extends Xrm.PageBase<OmnichannelQuickviewwithRatingvalues.Attributes,OmnichannelQuickviewwithRatingvalues.Tabs,OmnichannelQuickviewwithRatingvalues.Controls> {
    getAttribute(attributeName: "maxratingvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "minratingvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Rating_Values"): Xrm.SubGridControl<"ratingvalue">;
    getControl(controlName: "maxratingvalue"): Xrm.NumberControl;
    getControl(controlName: "minratingvalue"): Xrm.NumberControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
