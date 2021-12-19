declare namespace Form.opportunityclose.QuickCreate {
  namespace OpportunityClose {
    namespace Tabs {
      interface OpportunityClose extends Xrm.SectionCollectionBase {
        get(name: "quickOpportunityClose_column1_section1"): Xrm.PageSection;
        get(name: "quickOpportunityClose_column2_section1"): Xrm.PageSection;
        get(name: "quickOpportunityClose_column3_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actualend"): Xrm.DateAttribute;
      get(name: "actualrevenue"): Xrm.NumberAttribute;
      get(name: "competitorid"): Xrm.LookupAttribute<"competitor">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "opportunitystatecode"): Xrm.OptionSetAttribute<opportunityclose_opportunity_statecode>;
      get(name: "opportunitystatuscode"): Xrm.OptionSetAttribute<OpportunityClose_opportunity_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "actualend"): Xrm.DateControl;
      get(name: "actualrevenue"): Xrm.NumberControl;
      get(name: "competitorid"): Xrm.LookupControl<"competitor">;
      get(name: "description"): Xrm.StringControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "opportunitystatecode"): Xrm.OptionSetControl<opportunityclose_opportunity_statecode>;
      get(name: "opportunitystatuscode"): Xrm.OptionSetControl<OpportunityClose_opportunity_statuscode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"NoAttribute">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "OpportunityClose"): Xrm.PageTab<Tabs.OpportunityClose>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface OpportunityClose extends Xrm.PageBase<OpportunityClose.Attributes,OpportunityClose.Tabs,OpportunityClose.Controls> {
    getAttribute(attributeName: "actualend"): Xrm.DateAttribute;
    getAttribute(attributeName: "actualrevenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "competitorid"): Xrm.LookupAttribute<"competitor">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "opportunitystatecode"): Xrm.OptionSetAttribute<opportunityclose_opportunity_statecode>;
    getAttribute(attributeName: "opportunitystatuscode"): Xrm.OptionSetAttribute<OpportunityClose_opportunity_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "actualend"): Xrm.DateControl;
    getControl(controlName: "actualrevenue"): Xrm.NumberControl;
    getControl(controlName: "competitorid"): Xrm.LookupControl<"competitor">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "opportunitystatecode"): Xrm.OptionSetControl<opportunityclose_opportunity_statecode>;
    getControl(controlName: "opportunitystatuscode"): Xrm.OptionSetControl<OpportunityClose_opportunity_statuscode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"NoAttribute">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
