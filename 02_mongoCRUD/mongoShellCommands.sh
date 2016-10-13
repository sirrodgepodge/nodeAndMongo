# These are shell commands for performing CRUD operations in mongoDB

# need to make a collection first
db.createCollection(<collectionName>);

# CRUD (on a collection)

# create
db.<collectionName>.insert([{ prop: 'val' }, { prop2: 'val2'}]);

# read
db.<collectionName>.find();
db.<collectionName>.find({ prop: 'val' }); # will return only the first object

# update
db.<collectionName>.update(<findQuery>, { prop3: 'val3' }); # will update objects matching 'findQuery'

# delete
db.<collectionName>.remove(<findQuery>);
