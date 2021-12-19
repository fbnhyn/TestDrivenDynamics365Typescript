declare namespace Form.bookableresourcecharacteristic.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "characteristic"): Xrm.LookupAttribute<"characteristic">;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ratingvalue"): Xrm.LookupAttribute<"ratingvalue">;
      get(name: "resource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "characteristic"): Xrm.LookupControl<"characteristic">;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ratingvalue"): Xrm.LookupControl<"ratingvalue">;
      get(name: "resource"): Xrm.LookupControl<"bookableresource">;
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
    getAttribute(attributeName: "characteristic"): Xrm.LookupAttribute<"characteristic">;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ratingvalue"): Xrm.LookupAttribute<"ratingvalue">;
    getAttribute(attributeName: "resource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "characteristic"): Xrm.LookupControl<"characteristic">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ratingvalue"): Xrm.LookupControl<"ratingvalue">;
    getControl(controlName: "resource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
