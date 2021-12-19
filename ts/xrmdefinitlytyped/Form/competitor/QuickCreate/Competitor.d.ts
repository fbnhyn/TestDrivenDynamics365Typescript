declare namespace Form.competitor.QuickCreate {
  namespace Competitor {
    namespace Tabs {
      interface newCompetitor extends Xrm.SectionCollectionBase {
        get(name: "quickCompetitor_column1"): Xrm.PageSection;
        get(name: "quickCompetitor_column2"): Xrm.PageSection;
        get(name: "quickCompetitor_column3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "reportedrevenue"): Xrm.NumberAttribute;
      get(name: "strengths"): Xrm.Attribute<string>;
      get(name: "tickersymbol"): Xrm.Attribute<string>;
      get(name: "weaknesses"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "name"): Xrm.StringControl;
      get(name: "reportedrevenue"): Xrm.NumberControl;
      get(name: "strengths"): Xrm.StringControl;
      get(name: "tickersymbol"): Xrm.StringControl;
      get(name: "weaknesses"): Xrm.StringControl;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "newCompetitor"): Xrm.PageTab<Tabs.newCompetitor>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Competitor extends Xrm.PageBase<Competitor.Attributes,Competitor.Tabs,Competitor.Controls> {
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "reportedrevenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "strengths"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tickersymbol"): Xrm.Attribute<string>;
    getAttribute(attributeName: "weaknesses"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "reportedrevenue"): Xrm.NumberControl;
    getControl(controlName: "strengths"): Xrm.StringControl;
    getControl(controlName: "tickersymbol"): Xrm.StringControl;
    getControl(controlName: "weaknesses"): Xrm.StringControl;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
