declare namespace Form.salesliterature.Main {
  namespace SalesLiterature {
    namespace Tabs {
      interface general_information extends Xrm.SectionCollectionBase {
        get(name: "related"): Xrm.PageSection;
        get(name: "sales literature information"): Xrm.PageSection;
        get(name: "sales_attachments"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "employeecontactid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "expirationdate"): Xrm.DateAttribute;
      get(name: "literaturetypecode"): Xrm.OptionSetAttribute<salesliterature_literaturetypecode>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "subjectid"): Xrm.LookupAttribute<"subject">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Competitors"): Xrm.SubGridControl<"competitor">;
      get(name: "Products"): Xrm.SubGridControl<"product">;
      get(name: "SalesAttachments"): Xrm.SubGridControl<"salesliteratureitem">;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_employeecontactid"): Xrm.LookupControl<"systemuser">;
      get(name: "header_expirationdate"): Xrm.DateControl;
      get(name: "literaturetypecode"): Xrm.OptionSetControl<salesliterature_literaturetypecode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "subjectid"): Xrm.LookupControl<"subject">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general_information"): Xrm.PageTab<Tabs.general_information>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SalesLiterature extends Xrm.PageBase<SalesLiterature.Attributes,SalesLiterature.Tabs,SalesLiterature.Controls> {
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "employeecontactid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "expirationdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "literaturetypecode"): Xrm.OptionSetAttribute<salesliterature_literaturetypecode>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"subject">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Competitors"): Xrm.SubGridControl<"competitor">;
    getControl(controlName: "Products"): Xrm.SubGridControl<"product">;
    getControl(controlName: "SalesAttachments"): Xrm.SubGridControl<"salesliteratureitem">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_employeecontactid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "header_expirationdate"): Xrm.DateControl;
    getControl(controlName: "literaturetypecode"): Xrm.OptionSetControl<salesliterature_literaturetypecode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "subjectid"): Xrm.LookupControl<"subject">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
