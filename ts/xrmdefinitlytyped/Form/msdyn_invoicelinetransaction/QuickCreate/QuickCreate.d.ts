declare namespace Form.msdyn_invoicelinetransaction.QuickCreate {
  namespace QuickCreate {
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
      get(name: "msdyn_accountvendor"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_amountmethod"): Xrm.OptionSetAttribute<msdyn_amountmethod>;
      get(name: "msdyn_basisamount"): Xrm.NumberAttribute;
      get(name: "msdyn_basisquantity"): Xrm.NumberAttribute;
      get(name: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_contactvendor"): Xrm.LookupAttribute<"contact">;
      get(name: "msdyn_documentdate"): Xrm.DateAttribute;
      get(name: "msdyn_enddatetime"): Xrm.DateAttribute;
      get(name: "msdyn_percent"): Xrm.NumberAttribute;
      get(name: "msdyn_price"): Xrm.NumberAttribute;
      get(name: "msdyn_product"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_startdatetime"): Xrm.DateAttribute;
      get(name: "msdyn_task"): Xrm.LookupAttribute<"msdyn_projecttask">;
      get(name: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
      get(name: "msdyn_transactiontypecode"): Xrm.OptionSetAttribute<msdyn_transactiontypecode>;
      get(name: "msdyn_vendortype"): Xrm.OptionSetAttribute<msdyn_partytype>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_accountvendor"): Xrm.LookupControl<"account">;
      get(name: "msdyn_amountmethod"): Xrm.OptionSetControl<msdyn_amountmethod>;
      get(name: "msdyn_basisamount"): Xrm.NumberControl;
      get(name: "msdyn_basisquantity"): Xrm.NumberControl;
      get(name: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_contactvendor"): Xrm.LookupControl<"contact">;
      get(name: "msdyn_documentdate"): Xrm.DateControl;
      get(name: "msdyn_enddatetime"): Xrm.DateControl;
      get(name: "msdyn_percent"): Xrm.NumberControl;
      get(name: "msdyn_price"): Xrm.NumberControl;
      get(name: "msdyn_product"): Xrm.LookupControl<"product">;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_startdatetime"): Xrm.DateControl;
      get(name: "msdyn_task"): Xrm.LookupControl<"msdyn_projecttask">;
      get(name: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
      get(name: "msdyn_transactiontypecode"): Xrm.OptionSetControl<msdyn_transactiontypecode>;
      get(name: "msdyn_vendortype"): Xrm.OptionSetControl<msdyn_partytype>;
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
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "msdyn_accountvendor"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_amountmethod"): Xrm.OptionSetAttribute<msdyn_amountmethod>;
    getAttribute(attributeName: "msdyn_basisamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_basisquantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_contactvendor"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "msdyn_documentdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_enddatetime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_percent"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_product"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_startdatetime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_task"): Xrm.LookupAttribute<"msdyn_projecttask">;
    getAttribute(attributeName: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
    getAttribute(attributeName: "msdyn_transactiontypecode"): Xrm.OptionSetAttribute<msdyn_transactiontypecode>;
    getAttribute(attributeName: "msdyn_vendortype"): Xrm.OptionSetAttribute<msdyn_partytype>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_accountvendor"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_amountmethod"): Xrm.OptionSetControl<msdyn_amountmethod>;
    getControl(controlName: "msdyn_basisamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_basisquantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_contactvendor"): Xrm.LookupControl<"contact">;
    getControl(controlName: "msdyn_documentdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_enddatetime"): Xrm.DateControl;
    getControl(controlName: "msdyn_percent"): Xrm.NumberControl;
    getControl(controlName: "msdyn_price"): Xrm.NumberControl;
    getControl(controlName: "msdyn_product"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_startdatetime"): Xrm.DateControl;
    getControl(controlName: "msdyn_task"): Xrm.LookupControl<"msdyn_projecttask">;
    getControl(controlName: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
    getControl(controlName: "msdyn_transactiontypecode"): Xrm.OptionSetControl<msdyn_transactiontypecode>;
    getControl(controlName: "msdyn_vendortype"): Xrm.OptionSetControl<msdyn_partytype>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
