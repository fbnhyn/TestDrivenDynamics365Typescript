declare namespace Form.metric.Main {
  namespace Information {
    namespace Tabs {
      interface RollupAttributes extends Xrm.SectionCollectionBase {
        get(name: "{CEBD8001-3DD4-4abb-99DE-9A3F2FD250EB}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface description extends Xrm.SectionCollectionBase {
        get(name: "description"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "{379F3DB8-82DF-4e44-930A-C7A22C0E5206}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "amountdatatype"): Xrm.OptionSetAttribute<metric_goaltype>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "isamount"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isstretchtracked"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<metric_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "MetricLineItemSubGrid"): Xrm.SubGridControl<"rollupfield">;
      get(name: "amountdatatype"): Xrm.OptionSetControl<metric_goaltype>;
      get(name: "description"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<metric_statecode>;
      get(name: "isamount"): Xrm.OptionSetControl<boolean>;
      get(name: "isstretchtracked"): Xrm.OptionSetControl<boolean>;
      get(name: "name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Rollup Attributes"): Xrm.PageTab<Tabs.RollupAttributes>;
      get(name: "description"): Xrm.PageTab<Tabs.description>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "amountdatatype"): Xrm.OptionSetAttribute<metric_goaltype>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "isamount"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isstretchtracked"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<metric_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "MetricLineItemSubGrid"): Xrm.SubGridControl<"rollupfield">;
    getControl(controlName: "amountdatatype"): Xrm.OptionSetControl<metric_goaltype>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<metric_statecode>;
    getControl(controlName: "isamount"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isstretchtracked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
