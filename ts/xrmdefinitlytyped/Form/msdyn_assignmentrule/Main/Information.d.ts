declare namespace Form.msdyn_assignmentrule.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_SpecificSellersOrTeams"): Xrm.Attribute<string>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_distributeto"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_distributeto>;
      get(name: "msdyn_distributiontype"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_distributiontype>;
      get(name: "msdyn_entityfilter"): Xrm.Attribute<string>;
      get(name: "msdyn_evaluationorder"): Xrm.NumberAttribute;
      get(name: "msdyn_matchtype"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_matchtype>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_objecttypecode"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_objecttypecode>;
      get(name: "msdyn_segmentid"): Xrm.LookupAttribute<"msdyn_segment">;
      get(name: "msdyn_sellerfilter"): Xrm.Attribute<string>;
      get(name: "msdyn_triggertype"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_triggertype>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_SpecificSellersOrTeams"): Xrm.StringControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_distributeto"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_distributeto>;
      get(name: "msdyn_distributiontype"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_distributiontype>;
      get(name: "msdyn_entityfilter"): Xrm.StringControl;
      get(name: "msdyn_evaluationorder"): Xrm.NumberControl;
      get(name: "msdyn_matchtype"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_matchtype>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_objecttypecode"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_objecttypecode>;
      get(name: "msdyn_segmentid"): Xrm.LookupControl<"msdyn_segment">;
      get(name: "msdyn_sellerfilter"): Xrm.StringControl;
      get(name: "msdyn_triggertype"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_triggertype>;
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
    getAttribute(attributeName: "msdyn_SpecificSellersOrTeams"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_distributeto"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_distributeto>;
    getAttribute(attributeName: "msdyn_distributiontype"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_distributiontype>;
    getAttribute(attributeName: "msdyn_entityfilter"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_evaluationorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_matchtype"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_matchtype>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_objecttypecode"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_objecttypecode>;
    getAttribute(attributeName: "msdyn_segmentid"): Xrm.LookupAttribute<"msdyn_segment">;
    getAttribute(attributeName: "msdyn_sellerfilter"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_triggertype"): Xrm.OptionSetAttribute<msdyn_assignmentrule_msdyn_triggertype>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_SpecificSellersOrTeams"): Xrm.StringControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_distributeto"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_distributeto>;
    getControl(controlName: "msdyn_distributiontype"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_distributiontype>;
    getControl(controlName: "msdyn_entityfilter"): Xrm.StringControl;
    getControl(controlName: "msdyn_evaluationorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_matchtype"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_matchtype>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_objecttypecode"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_objecttypecode>;
    getControl(controlName: "msdyn_segmentid"): Xrm.LookupControl<"msdyn_segment">;
    getControl(controlName: "msdyn_sellerfilter"): Xrm.StringControl;
    getControl(controlName: "msdyn_triggertype"): Xrm.OptionSetControl<msdyn_assignmentrule_msdyn_triggertype>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
