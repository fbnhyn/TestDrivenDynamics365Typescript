declare namespace Form.msdyn_skillattachmenttarget.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_characteristicid"): Xrm.LookupAttribute<"characteristic">;
      get(name: "msdyn_ratingvalueid"): Xrm.LookupAttribute<"ratingvalue">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_characteristicid"): Xrm.LookupControl<"characteristic">;
      get(name: "msdyn_ratingvalueid"): Xrm.LookupControl<"ratingvalue">;
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
    getAttribute(attributeName: "msdyn_characteristicid"): Xrm.LookupAttribute<"characteristic">;
    getAttribute(attributeName: "msdyn_ratingvalueid"): Xrm.LookupAttribute<"ratingvalue">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_characteristicid"): Xrm.LookupControl<"characteristic">;
    getControl(controlName: "msdyn_ratingvalueid"): Xrm.LookupControl<"ratingvalue">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
