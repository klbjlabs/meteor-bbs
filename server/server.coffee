# server

Meteor.startup ->
  NODES =
    meteor: 'Meteor'
    mongo: 'MongoDB'
    coffee: 'CoffeeScipt'
    html5: 'Html5'
    css: 'CSS'

  if Nodes.find({}).count() is 0
    for k, v of NODES
      Nodes.insert name: k, zh: v

#Meteor.startup ->
  # code to run on server at startup
#  console.log "service weibo login success"
#  Accounts.loginServiceConfiguration.remove service: "weibo"
#  Accounts.loginServiceConfiguration.insert
#    service: "weibo"
#    clientId: "876469458"
#    secret: "82a6839216adb346e366ca8e8bee6e67"

#  return


# server: publish all nodes
Meteor.publish "all_nodes", ->
  Nodes.find()

PAGE_ITEM = 20

# pages count
Meteor.publish 'pages_count', ->
  Pages.find()

Meteor.methods
  updatePagesCount: (tab) ->
    sel = if tab == '/' then {} else {nodes: tab}
    count = Math.ceil ( Topics.find(sel).count() / PAGE_ITEM )

    old = Pages.findOne tab: tab
    if not old?
      Pages.insert {tab: tab, count: count}
    else if old.count isnt count
      Pages.update {tab: tab}, {$set: {count: count}}


# current page topics
Meteor.publish "topics", (tab, page) ->
  sel = if tab == '/' then {} else {nodes: tab}
  start = PAGE_ITEM * (page - 1)

  Topics.find sel, {sort: {updated: -1}, skip: start, limit: PAGE_ITEM}

# current topic replys
Meteor.publish 'replys', (topic_id) ->
  Replys.find topic_id: topic_id


# publish all users' profile
Meteor.publish "allUserData", ->
  Meteor.users.find({}, {fields: {'profile': 1}})


Meteor.publish 'member_topics', (member_id) ->
  Topics.find {userId: member_id}, {sort: {updated: -1}, limit: 20}

Meteor.publish 'member_replys', (member_id) ->
  Replys.find {userId: member_id}, {sort: {created: -1}, limit: 20}


