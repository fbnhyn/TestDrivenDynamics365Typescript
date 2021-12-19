declare namespace Form.msdyn_projectapproval.Main {
  namespace Information {
    namespace Tabs {
      interface _6d5860c6aeb24d179db3226a9d6466f5 extends Xrm.SectionCollectionBase {
        get(name: "_column_2_section_1"): Xrm.PageSection;
        get(name: "{d55b3080-93d0-497a-a1c6-823d788e066a}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_approvalset"): Xrm.LookupAttribute<"msdyn_approvalset">;
      get(name: "msdyn_approvedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
      get(name: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_costquantity"): Xrm.NumberAttribute;
      get(name: "msdyn_expenseentry"): Xrm.LookupAttribute<"msdyn_expense">;
      get(name: "msdyn_externalcomments"): Xrm.Attribute<string>;
      get(name: "msdyn_hasreceipt"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_recordstage"): Xrm.OptionSetAttribute<msdyn_projectapproval_msdyn_recordstage>;
      get(name: "msdyn_salesprice"): Xrm.NumberAttribute;
      get(name: "msdyn_salesquantity"): Xrm.NumberAttribute;
      get(name: "msdyn_submittedby"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_timeentry"): Xrm.LookupAttribute<"msdyn_timeentry">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "header_msdyn_manager"): Xrm.LookupControl<"systemuser">;
      get(name: "header_msdyn_recordstage"): Xrm.OptionSetControl<msdyn_projectapproval_msdyn_recordstage>;
      get(name: "msdyn_approvalset"): Xrm.LookupControl<"msdyn_approvalset">;
      get(name: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
      get(name: "msdyn_costquantity"): Xrm.NumberControl;
      get(name: "msdyn_expenseentry"): Xrm.LookupControl<"msdyn_expense">;
      get(name: "msdyn_externalcomments"): Xrm.StringControl;
      get(name: "msdyn_hasreceipt"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_salesprice"): Xrm.NumberControl;
      get(name: "msdyn_salesquantity"): Xrm.NumberControl;
      get(name: "msdyn_submittedby"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_timeentry"): Xrm.LookupControl<"msdyn_timeentry">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{6d5860c6-aeb2-4d17-9db3-226a9d6466f5}"): Xrm.PageTab<Tabs._6d5860c6aeb24d179db3226a9d6466f5>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_approvalset"): Xrm.LookupAttribute<"msdyn_approvalset">;
    getAttribute(attributeName: "msdyn_approvedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
    getAttribute(attributeName: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_costquantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_expenseentry"): Xrm.LookupAttribute<"msdyn_expense">;
    getAttribute(attributeName: "msdyn_externalcomments"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_hasreceipt"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_recordstage"): Xrm.OptionSetAttribute<msdyn_projectapproval_msdyn_recordstage>;
    getAttribute(attributeName: "msdyn_salesprice"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_salesquantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_submittedby"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_timeentry"): Xrm.LookupAttribute<"msdyn_timeentry">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "header_msdyn_manager"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "header_msdyn_recordstage"): Xrm.OptionSetControl<msdyn_projectapproval_msdyn_recordstage>;
    getControl(controlName: "msdyn_approvalset"): Xrm.LookupControl<"msdyn_approvalset">;
    getControl(controlName: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
    getControl(controlName: "msdyn_costquantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_expenseentry"): Xrm.LookupControl<"msdyn_expense">;
    getControl(controlName: "msdyn_externalcomments"): Xrm.StringControl;
    getControl(controlName: "msdyn_hasreceipt"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_salesprice"): Xrm.NumberControl;
    getControl(controlName: "msdyn_salesquantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_submittedby"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_timeentry"): Xrm.LookupControl<"msdyn_timeentry">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
