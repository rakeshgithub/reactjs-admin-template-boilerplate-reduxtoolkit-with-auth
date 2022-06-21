export const displayField = (fieldsData, dataRow) => {
  console.log("fieldsData", fieldsData);
  let field = fieldsData.field;
  let label = fieldsData.label ? fieldsData.label : "";
  let prefix = fieldsData.prefix ? fieldsData.prefix : "";
  let postfix = fieldsData.postfix ? fieldsData.postfix : "";

  return (
    <>
      {dataRow[field] && (
        <div>
          {label && <span>{label}: </span>}
          {prefix && <span>{prefix}</span>}
          <span>{dataRow[field]}</span>
          {postfix && <span>{postfix}</span>}
        </div>
      )}
    </>
  );
};
export const mergeFields = (fieldsData, dataRow) => {
  let fields = fieldsData.fields;
  let labels = fieldsData.labels ? fieldsData.labels : [];
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <>
            {dataRow[field] ? (
              <div key={`defaulter${index}`}>
                {labels[index] ? (
                  <span>
                    <strong>{labels[index]}: </strong>
                  </span>
                ) : null}
                <span>{dataRow[field]}</span>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};
