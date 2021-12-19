declare namespace Form.ratingmodel.Main {
  namespace OmnichannelInformation {
    namespace Tabs {
      interface eb7e384644dc4541ab635c9fb594f107 extends Xrm.SectionCollectionBase {
        get(name: "{eb7e3846-44dc-4541-ab63-5c9fb594f107}_section_3"): Xrm.PageSection;
        get(name: "{fc24dd79-f2ff-4942-bb88-c5ef718132f1}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "maxratingvalue"): Xrm.NumberAttribute;
      get(name: "minratingvalue"): Xrm.NumberAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RatingValues"): Xrm.SubGridControl<"ratingvalue">;
      get(name: "maxratingvalue"): Xrm.NumberControl;
      get(name: "minratingvalue"): Xrm.NumberControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{eb7e3846-44dc-4541-ab63-5c9fb594f107}"): Xrm.PageTab<Tabs.eb7e384644dc4541ab635c9fb594f107>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface OmnichannelInformation extends Xrm.PageBase<OmnichannelInformation.Attributes,OmnichannelInformation.Tabs,OmnichannelInformation.Controls> {
    getAttribute(attributeName: "maxratingvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "minratingvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RatingValues"): Xrm.SubGridControl<"ratingvalue">;
    getControl(controlName: "maxratingvalue"): Xrm.NumberControl;
    getControl(controlName: "minratingvalue"): Xrm.NumberControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
