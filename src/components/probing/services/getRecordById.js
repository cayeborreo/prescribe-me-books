export const getRecordById = (records, id) => {
  const filtered = records?.filter(record => record?.recordId === id)
  if (filtered.length > 0) {
    return filtered[0]
  } else return ""
}
