declare namespace Form.product.Main {
  namespace Product {
    namespace Tabs {
      interface FieldService extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: "tab_3_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface price_list_items extends Xrm.SectionCollectionBase {
        get(name: "knowledgesection"): Xrm.PageSection;
        get(name: "msdynsales_pricing_information"): Xrm.PageSection;
        get(name: "price_list_items_section"): Xrm.PageSection;
        get(name: "productsubstitute_items_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface product_details extends Xrm.SectionCollectionBase {
        get(name: "costs"): Xrm.PageSection;
        get(name: "product information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface product_dynamic_properties extends Xrm.SectionCollectionBase {
        get(name: "product_dynamic_properties_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface productassocaition_items extends Xrm.SectionCollectionBase {
        get(name: "DynamicProperties"): Xrm.PageSection;
        get(name: "productassocaition_items_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "currentcost"): Xrm.NumberAttribute;
      get(name: "defaultuomid"): Xrm.LookupAttribute<"uom">;
      get(name: "defaultuomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "msdyn_converttocustomerasset"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_defaultvendor"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_fieldserviceproducttype"): Xrm.OptionSetAttribute<msdyn_fieldserviceproducttype>;
      get(name: "msdyn_purchasename"): Xrm.Attribute<string>;
      get(name: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_upccode"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "parentproductid"): Xrm.LookupAttribute<"product">;
      get(name: "price"): Xrm.NumberAttribute;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "productnumber"): Xrm.Attribute<string>;
      get(name: "quantitydecimal"): Xrm.NumberAttribute;
      get(name: "standardcost"): Xrm.NumberAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<product_statecode>;
      get(name: "subjectid"): Xrm.LookupAttribute<"subject">;
      get(name: "validfromdate"): Xrm.DateAttribute;
      get(name: "validtodate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
      get(name: "KnowledgeArticlesSubGrid"): Xrm.SubGridControl<"knowledgearticle">;
      get(name: "Price_List_Items"): Xrm.SubGridControl<"productpricelevel">;
      get(name: "currentcost"): Xrm.NumberControl;
      get(name: "currentcost1"): Xrm.NumberControl;
      get(name: "defaultuomid"): Xrm.LookupControl<"uom">;
      get(name: "defaultuomscheduleid"): Xrm.LookupControl<"uomschedule">;
      get(name: "description"): Xrm.StringControl;
      get(name: "editableParentControl"): Xrm.LookupControl<"product">;
      get(name: "header_statecode"): Xrm.OptionSetControl<product_statecode>;
      get(name: "msdyn_converttocustomerasset"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_defaultvendor"): Xrm.LookupControl<"account">;
      get(name: "msdyn_fieldserviceproducttype"): Xrm.OptionSetControl<msdyn_fieldserviceproducttype>;
      get(name: "msdyn_purchasename"): Xrm.StringControl;
      get(name: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_upccode"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "parentproductid"): Xrm.LookupControl<"product">;
      get(name: "price"): Xrm.NumberControl;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "product_dynamic_properties"): Xrm.SubGridControl<"dynamicproperty">;
      get(name: "product_dynamic_properties_offline"): Xrm.SubGridControl<"dynamicproperty">;
      get(name: "productassocaition_items"): Xrm.SubGridControl<"productassociation">;
      get(name: "productnumber"): Xrm.StringControl;
      get(name: "productsubstitute_items"): Xrm.SubGridControl<"productsubstitute">;
      get(name: "quantitydecimal"): Xrm.NumberControl;
      get(name: "standardcost"): Xrm.NumberControl;
      get(name: "standardcost1"): Xrm.NumberControl;
      get(name: "subjectid"): Xrm.LookupControl<"subject">;
      get(name: "validfromdate"): Xrm.DateControl;
      get(name: "validtodate"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "FieldService"): Xrm.PageTab<Tabs.FieldService>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: "price_list_items"): Xrm.PageTab<Tabs.price_list_items>;
      get(name: "product_details"): Xrm.PageTab<Tabs.product_details>;
      get(name: "product_dynamic_properties"): Xrm.PageTab<Tabs.product_dynamic_properties>;
      get(name: "productassocaition_items"): Xrm.PageTab<Tabs.productassocaition_items>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Product extends Xrm.PageBase<Product.Attributes,Product.Tabs,Product.Controls> {
    getAttribute(attributeName: "currentcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "defaultuomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "defaultuomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_converttocustomerasset"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_defaultvendor"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_fieldserviceproducttype"): Xrm.OptionSetAttribute<msdyn_fieldserviceproducttype>;
    getAttribute(attributeName: "msdyn_purchasename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_upccode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentproductid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "productnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "quantitydecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "standardcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<product_statecode>;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"subject">;
    getAttribute(attributeName: "validfromdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "validtodate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "KnowledgeArticlesSubGrid"): Xrm.SubGridControl<"knowledgearticle">;
    getControl(controlName: "Price_List_Items"): Xrm.SubGridControl<"productpricelevel">;
    getControl(controlName: "currentcost"): Xrm.NumberControl;
    getControl(controlName: "currentcost1"): Xrm.NumberControl;
    getControl(controlName: "defaultuomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "defaultuomscheduleid"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "editableParentControl"): Xrm.LookupControl<"product">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<product_statecode>;
    getControl(controlName: "msdyn_converttocustomerasset"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_defaultvendor"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_fieldserviceproducttype"): Xrm.OptionSetControl<msdyn_fieldserviceproducttype>;
    getControl(controlName: "msdyn_purchasename"): Xrm.StringControl;
    getControl(controlName: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_upccode"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "parentproductid"): Xrm.LookupControl<"product">;
    getControl(controlName: "price"): Xrm.NumberControl;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "product_dynamic_properties"): Xrm.SubGridControl<"dynamicproperty">;
    getControl(controlName: "product_dynamic_properties_offline"): Xrm.SubGridControl<"dynamicproperty">;
    getControl(controlName: "productassocaition_items"): Xrm.SubGridControl<"productassociation">;
    getControl(controlName: "productnumber"): Xrm.StringControl;
    getControl(controlName: "productsubstitute_items"): Xrm.SubGridControl<"productsubstitute">;
    getControl(controlName: "quantitydecimal"): Xrm.NumberControl;
    getControl(controlName: "standardcost"): Xrm.NumberControl;
    getControl(controlName: "standardcost1"): Xrm.NumberControl;
    getControl(controlName: "subjectid"): Xrm.LookupControl<"subject">;
    getControl(controlName: "validfromdate"): Xrm.DateControl;
    getControl(controlName: "validtodate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
