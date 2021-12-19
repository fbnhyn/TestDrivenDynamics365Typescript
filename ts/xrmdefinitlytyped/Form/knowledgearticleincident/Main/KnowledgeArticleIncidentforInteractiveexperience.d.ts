declare namespace Form.knowledgearticleincident.Main {
  namespace KnowledgeArticleIncidentforInteractiveexperience {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "incidentid"): Xrm.LookupAttribute<"incident">;
      get(name: "issenttocustomer"): Xrm.OptionSetAttribute<boolean>;
      get(name: "knowledgeusage"): Xrm.OptionSetAttribute<knowledgearticleincident_knowledgeusage>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "incidentid"): Xrm.LookupControl<"incident">;
      get(name: "issenttocustomer"): Xrm.OptionSetControl<boolean>;
      get(name: "knowledgeusage"): Xrm.OptionSetControl<knowledgearticleincident_knowledgeusage>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface KnowledgeArticleIncidentforInteractiveexperience extends Xrm.PageBase<KnowledgeArticleIncidentforInteractiveexperience.Attributes,KnowledgeArticleIncidentforInteractiveexperience.Tabs,KnowledgeArticleIncidentforInteractiveexperience.Controls> {
    getAttribute(attributeName: "incidentid"): Xrm.LookupAttribute<"incident">;
    getAttribute(attributeName: "issenttocustomer"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "knowledgeusage"): Xrm.OptionSetAttribute<knowledgearticleincident_knowledgeusage>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "incidentid"): Xrm.LookupControl<"incident">;
    getControl(controlName: "issenttocustomer"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "knowledgeusage"): Xrm.OptionSetControl<knowledgearticleincident_knowledgeusage>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
