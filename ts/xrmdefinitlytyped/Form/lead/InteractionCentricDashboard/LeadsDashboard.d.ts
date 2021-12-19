declare namespace Form.lead.InteractionCentricDashboard {
  namespace LeadsDashboard {
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
      get(name: "budgetamount"): Xrm.NumberAttribute | null;
      get(name: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "description"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcontactid"): Xrm.LookupAttribute<"contact"> | null;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess> | null;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Componentb331101"): Xrm.SubGridControl<"lead">;
      get(name: "Componentd3ca6ed"): Xrm.SubGridControl<"lead">;
      get(name: "Componentf835e12"): Xrm.SubGridControl<"lead">;
      get(name: "Component{71203de0-1572-9d25-7be5-7d25e0d0981d}"): Xrm.BaseControl;
      get(name: "header_process_budgetamount"): Xrm.NumberControl | null;
      get(name: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_description"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_parentcontactid"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
      get(name: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
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
  interface LeadsDashboard extends Xrm.PageBase<LeadsDashboard.Attributes,LeadsDashboard.Tabs,LeadsDashboard.Controls> {
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "description"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute<"contact"> | null;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess> | null;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Componentb331101"): Xrm.SubGridControl<"lead">;
    getControl(controlName: "Componentd3ca6ed"): Xrm.SubGridControl<"lead">;
    getControl(controlName: "Componentf835e12"): Xrm.SubGridControl<"lead">;
    getControl(controlName: "Component{71203de0-1572-9d25-7be5-7d25e0d0981d}"): Xrm.BaseControl;
    getControl(controlName: "header_process_budgetamount"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_parentcontactid"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
    getControl(controlName: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
