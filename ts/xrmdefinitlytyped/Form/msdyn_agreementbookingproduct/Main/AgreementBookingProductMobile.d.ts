declare namespace Form.msdyn_agreementbookingproduct.Main {
  namespace AgreementBookingProductMobile {
    namespace Tabs {
      interface fstab_general extends Xrm.SectionCollectionBase {
        get(name: "fstab_general_section_general"): Xrm.PageSection;
        get(name: "fstab_general_section_product_relates_to"): Xrm.PageSection;
        get(name: "fstab_general_section_quanity_sale_amount"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_other extends Xrm.SectionCollectionBase {
        get(name: "fstab_other_section"): Xrm.PageSection;
        get(name: "fstab_other_section_2"): Xrm.PageSection;
        get(name: "fstab_other_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_sub_grids extends Xrm.SectionCollectionBase {
        get(name: "fstab_sub_grids_section"): Xrm.PageSection;
        get(name: "fstab_sub_grids_section_2"): Xrm.PageSection;
        get(name: "fstab_sub_grids_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
      get(name: "msdyn_agreementbookingincident"): Xrm.LookupAttribute<"msdyn_agreementbookingincident">;
      get(name: "msdyn_agreementbookingsetup"): Xrm.LookupAttribute<"msdyn_agreementbookingsetup">;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
      get(name: "msdyn_lineorder"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "msdyn_product"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_qtytobill"): Xrm.NumberAttribute;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitamount"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
      get(name: "msdyn_agreementbookingincident"): Xrm.LookupControl<"msdyn_agreementbookingincident">;
      get(name: "msdyn_agreementbookingsetup"): Xrm.LookupControl<"msdyn_agreementbookingsetup">;
      get(name: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_lineorder"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
      get(name: "msdyn_product"): Xrm.LookupControl<"product">;
      get(name: "msdyn_qtytobill"): Xrm.NumberControl;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitamount"): Xrm.NumberControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "fstab_general"): Xrm.PageTab<Tabs.fstab_general>;
      get(name: "fstab_other"): Xrm.PageTab<Tabs.fstab_other>;
      get(name: "fstab_sub_grids"): Xrm.PageTab<Tabs.fstab_sub_grids>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AgreementBookingProductMobile extends Xrm.PageBase<AgreementBookingProductMobile.Attributes,AgreementBookingProductMobile.Tabs,AgreementBookingProductMobile.Controls> {
    getAttribute(attributeName: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
    getAttribute(attributeName: "msdyn_agreementbookingincident"): Xrm.LookupAttribute<"msdyn_agreementbookingincident">;
    getAttribute(attributeName: "msdyn_agreementbookingsetup"): Xrm.LookupAttribute<"msdyn_agreementbookingsetup">;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
    getAttribute(attributeName: "msdyn_lineorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "msdyn_product"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_qtytobill"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
    getControl(controlName: "msdyn_agreementbookingincident"): Xrm.LookupControl<"msdyn_agreementbookingincident">;
    getControl(controlName: "msdyn_agreementbookingsetup"): Xrm.LookupControl<"msdyn_agreementbookingsetup">;
    getControl(controlName: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_lineorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "msdyn_product"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_qtytobill"): Xrm.NumberControl;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitamount"): Xrm.NumberControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
