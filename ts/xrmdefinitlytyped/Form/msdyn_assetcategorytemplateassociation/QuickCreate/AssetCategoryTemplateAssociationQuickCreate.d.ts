declare namespace Form.msdyn_assetcategorytemplateassociation.QuickCreate {
  namespace AssetCategoryTemplateAssociationQuickCreate {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_customerassetcategory"): Xrm.LookupAttribute<"msdyn_customerassetcategory">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_propertytemplate"): Xrm.LookupAttribute<"msdyn_templateforproperties">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_customerassetcategory"): Xrm.LookupControl<"msdyn_customerassetcategory">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_propertytemplate"): Xrm.LookupControl<"msdyn_templateforproperties">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AssetCategoryTemplateAssociationQuickCreate extends Xrm.PageBase<AssetCategoryTemplateAssociationQuickCreate.Attributes,AssetCategoryTemplateAssociationQuickCreate.Tabs,AssetCategoryTemplateAssociationQuickCreate.Controls> {
    getAttribute(attributeName: "msdyn_customerassetcategory"): Xrm.LookupAttribute<"msdyn_customerassetcategory">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_propertytemplate"): Xrm.LookupAttribute<"msdyn_templateforproperties">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_customerassetcategory"): Xrm.LookupControl<"msdyn_customerassetcategory">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_propertytemplate"): Xrm.LookupControl<"msdyn_templateforproperties">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
