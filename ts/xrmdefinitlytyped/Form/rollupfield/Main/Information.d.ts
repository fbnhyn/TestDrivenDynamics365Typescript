declare namespace Form.rollupfield.Main {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "{27578c24-6dcb-7649-ba95-913c229c39eb}"): Xrm.PageSection;
        get(name: "{41a22d3a-56ec-4317-812a-ac5c92764cd5}"): Xrm.PageSection;
        get(name: "{6ad1c698-2e2e-8a08-b43a-b66815b9eb06}"): Xrm.PageSection;
        get(name: "{d65a4472-a959-3b9c-c416-d79c56e4a44b}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "dateattribute"): Xrm.Attribute<string>;
      get(name: "entityfordateattribute"): Xrm.Attribute<string>;
      get(name: "goalattribute"): Xrm.Attribute<string>;
      get(name: "sourceattribute"): Xrm.Attribute<string>;
      get(name: "sourceentity"): Xrm.OptionSetAttribute<number>;
      get(name: "sourcestate"): Xrm.NumberAttribute;
      get(name: "sourcestatus"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "dateattribute"): Xrm.OptionSetControl<number>;
      get(name: "dateattribute_UC"): Xrm.StringControl;
      get(name: "entityfordateattribute"): Xrm.OptionSetControl<number>;
      get(name: "entityfordateattribute_UC"): Xrm.StringControl;
      get(name: "goalattribute"): Xrm.OptionSetControl<number>;
      get(name: "goalattribute_UC"): Xrm.StringControl;
      get(name: "sourceattribute"): Xrm.OptionSetControl<number>;
      get(name: "sourceattribute_UC"): Xrm.StringControl;
      get(name: "sourceentity"): Xrm.OptionSetControl<number>;
      get(name: "sourceentity_UC"): Xrm.StringControl;
      get(name: "sourcestate"): Xrm.OptionSetControl<number>;
      get(name: "sourcestate_UC"): Xrm.NumberControl;
      get(name: "sourcestatus"): Xrm.OptionSetControl<number>;
      get(name: "sourcestatus_UC"): Xrm.NumberControl;
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
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "dateattribute"): Xrm.Attribute<string>;
    getAttribute(attributeName: "entityfordateattribute"): Xrm.Attribute<string>;
    getAttribute(attributeName: "goalattribute"): Xrm.Attribute<string>;
    getAttribute(attributeName: "sourceattribute"): Xrm.Attribute<string>;
    getAttribute(attributeName: "sourceentity"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "sourcestate"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sourcestatus"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "dateattribute"): Xrm.OptionSetControl<number>;
    getControl(controlName: "dateattribute_UC"): Xrm.StringControl;
    getControl(controlName: "entityfordateattribute"): Xrm.OptionSetControl<number>;
    getControl(controlName: "entityfordateattribute_UC"): Xrm.StringControl;
    getControl(controlName: "goalattribute"): Xrm.OptionSetControl<number>;
    getControl(controlName: "goalattribute_UC"): Xrm.StringControl;
    getControl(controlName: "sourceattribute"): Xrm.OptionSetControl<number>;
    getControl(controlName: "sourceattribute_UC"): Xrm.StringControl;
    getControl(controlName: "sourceentity"): Xrm.OptionSetControl<number>;
    getControl(controlName: "sourceentity_UC"): Xrm.StringControl;
    getControl(controlName: "sourcestate"): Xrm.OptionSetControl<number>;
    getControl(controlName: "sourcestate_UC"): Xrm.NumberControl;
    getControl(controlName: "sourcestatus"): Xrm.OptionSetControl<number>;
    getControl(controlName: "sourcestatus_UC"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
