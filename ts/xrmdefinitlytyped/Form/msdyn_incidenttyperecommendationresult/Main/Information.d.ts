declare namespace Form.msdyn_incidenttyperecommendationresult.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_incidenttype"): Xrm.LookupAttribute<"msdyn_incidenttype">;
      get(name: "msdyn_incidenttypeformerge"): Xrm.LookupAttribute<"msdyn_incidenttype">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_productservice"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_recommendationdescription"): Xrm.Attribute<string>;
      get(name: "msdyn_recommendationtype"): Xrm.OptionSetAttribute<msdyn_incidenttyperecommendationresult_msdyn_recommendationtype>;
      get(name: "msdyn_suggestedvalue"): Xrm.NumberAttribute;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_incidenttype"): Xrm.LookupControl<"msdyn_incidenttype">;
      get(name: "msdyn_incidenttypeformerge"): Xrm.LookupControl<"msdyn_incidenttype">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_productservice"): Xrm.LookupControl<"product">;
      get(name: "msdyn_recommendationdescription"): Xrm.StringControl;
      get(name: "msdyn_recommendationtype"): Xrm.OptionSetControl<msdyn_incidenttyperecommendationresult_msdyn_recommendationtype>;
      get(name: "msdyn_suggestedvalue"): Xrm.NumberControl;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
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
    getAttribute(attributeName: "msdyn_incidenttype"): Xrm.LookupAttribute<"msdyn_incidenttype">;
    getAttribute(attributeName: "msdyn_incidenttypeformerge"): Xrm.LookupAttribute<"msdyn_incidenttype">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_productservice"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_recommendationdescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_recommendationtype"): Xrm.OptionSetAttribute<msdyn_incidenttyperecommendationresult_msdyn_recommendationtype>;
    getAttribute(attributeName: "msdyn_suggestedvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_incidenttype"): Xrm.LookupControl<"msdyn_incidenttype">;
    getControl(controlName: "msdyn_incidenttypeformerge"): Xrm.LookupControl<"msdyn_incidenttype">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_productservice"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_recommendationdescription"): Xrm.StringControl;
    getControl(controlName: "msdyn_recommendationtype"): Xrm.OptionSetControl<msdyn_incidenttyperecommendationresult_msdyn_recommendationtype>;
    getControl(controlName: "msdyn_suggestedvalue"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
