declare namespace Form.knowledgearticleviews.Main {
  namespace KnowledgeArticleViews {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "knowledgearticleview"): Xrm.NumberAttribute;
      get(name: "location"): Xrm.OptionSetAttribute<knowledgearticleviews_location>;
      get(name: "viewdate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "knowledgearticleview"): Xrm.NumberControl;
      get(name: "location"): Xrm.OptionSetControl<knowledgearticleviews_location>;
      get(name: "viewdate"): Xrm.DateControl;
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
  interface KnowledgeArticleViews extends Xrm.PageBase<KnowledgeArticleViews.Attributes,KnowledgeArticleViews.Tabs,KnowledgeArticleViews.Controls> {
    getAttribute(attributeName: "knowledgearticleview"): Xrm.NumberAttribute;
    getAttribute(attributeName: "location"): Xrm.OptionSetAttribute<knowledgearticleviews_location>;
    getAttribute(attributeName: "viewdate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "knowledgearticleview"): Xrm.NumberControl;
    getControl(controlName: "location"): Xrm.OptionSetControl<knowledgearticleviews_location>;
    getControl(controlName: "viewdate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
