## Aug 19, 2022

Today, I worked on:

* Building the docker-compose.yaml file

The team all worked together to build out the docker-compose
file. We ran into many questions and errors along the way

#Create-User postgres-data# - for the postgres database. 
 ERROR: syntax error at or near -
 we were able to rename this to "postgresdata" without the - and it worked that way. We were not following naming conventions.

## Aug 22, 2022

* trying to understand Django picture_field

the team today did some research to try and glean how we could use django's picture field to allow users to upload their own photos. 

This seems to be a bit more involved then we first though. We currently have the images saving locally but are looking into cloud based storages where we can call a URL and have images stored on the cloud rather than needing to store them locally on a hard drive. (they wouldn't show up for anyone else this way)

Things to look into more ( PILLOW & Cloudinary )
  these two services seem to be able to work with django to store photos in the cloud for our use. This would allow all users to see photos uploads and we could filter from there. 

## Aug 23, 2022

* understanding that Cloudinary will not be useful to us once we deploy
* study on AWS and how we can use this service for our media and documentation

At the beginning of the day I though we would be able to use Cloudinary but that turned out not to be the case. I created a view and a template to test this out to see if it was a viable solution. When the rest of the group pulled my code from gitlab they were not able to see the same picture data that I had in my volume because volumes are not committed along with other data. 

This makes sense. As Danial put it, media and file date is extremely large and can mess up databases when they are put into them. Because of this, we will need to make dummy data for the data we are able to hard code and have that auto-run on start-up. Any persisting data, like pictures, will need to be stored on a service such as AWS 