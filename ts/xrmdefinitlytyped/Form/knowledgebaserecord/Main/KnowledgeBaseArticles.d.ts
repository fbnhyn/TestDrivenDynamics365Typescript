declare namespace Form.knowledgebaserecord.Main {
  namespace KnowledgeBaseArticles {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "privateurl"): Xrm.Attribute<string>;
      get(name: "publicurl"): Xrm.Attribute<string>;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: "uniqueid"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_id"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "privateurl"): Xrm.StringControl;
      get(name: "publicurl"): Xrm.StringControl;
      get(name: "title"): Xrm.StringControl;
      get(name: "uniqueid"): Xrm.StringControl;
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
  interface KnowledgeBaseArticles extends Xrm.PageBase<KnowledgeBaseArticles.Attributes,KnowledgeBaseArticles.Tabs,KnowledgeBaseArticles.Controls> {
    getAttribute(attributeName: "privateurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "publicurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uniqueid"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_id"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "privateurl"): Xrm.StringControl;
    getControl(controlName: "publicurl"): Xrm.StringControl;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: "uniqueid"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
