declare namespace Form.msdyusd_entitysearch.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_entity"): Xrm.LookupAttribute<"msdyusd_entityassignment">;
      get(name: "msdyusd_fetchxml"): Xrm.Attribute<string>;
      get(name: "msdyusd_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyusd_entitysearch_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyusd_entitysearch_statecode>;
      get(name: "msdyusd_entity"): Xrm.LookupControl<"msdyusd_entityassignment">;
      get(name: "msdyusd_fetchxml"): Xrm.StringControl;
      get(name: "msdyusd_name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
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
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyusd_entity"): Xrm.LookupAttribute<"msdyusd_entityassignment">;
    getAttribute(attributeName: "msdyusd_fetchxml"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyusd_entitysearch_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyusd_entitysearch_statecode>;
    getControl(controlName: "msdyusd_entity"): Xrm.LookupControl<"msdyusd_entityassignment">;
    getControl(controlName: "msdyusd_fetchxml"): Xrm.StringControl;
    getControl(controlName: "msdyusd_name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
