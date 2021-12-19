declare namespace Form.category.Main {
  namespace Category {
    namespace Tabs {
      interface AssociatedCategories extends Xrm.SectionCollectionBase {
        get(name: "Associated Categories"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "categorynumber"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "parentcategoryid"): Xrm.LookupAttribute<"category">;
      get(name: "sequencenumber"): Xrm.NumberAttribute;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AssociatedCategoriesGrid"): Xrm.SubGridControl<"category">;
      get(name: "categorynumber"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "parentcategoryid"): Xrm.LookupControl<"category">;
      get(name: "sequencenumber"): Xrm.NumberControl;
      get(name: "title"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AssociatedCategories"): Xrm.PageTab<Tabs.AssociatedCategories>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Category extends Xrm.PageBase<Category.Attributes,Category.Tabs,Category.Controls> {
    getAttribute(attributeName: "categorynumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentcategoryid"): Xrm.LookupAttribute<"category">;
    getAttribute(attributeName: "sequencenumber"): Xrm.NumberAttribute;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AssociatedCategoriesGrid"): Xrm.SubGridControl<"category">;
    getControl(controlName: "categorynumber"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "parentcategoryid"): Xrm.LookupControl<"category">;
    getControl(controlName: "sequencenumber"): Xrm.NumberControl;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
