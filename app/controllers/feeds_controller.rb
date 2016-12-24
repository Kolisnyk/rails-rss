class FeedsController < ApplicationController

  def index
    @feeds = Feed.all
  end

  def new
    @feed = Feed.new
  end

  def create
    @feed = Feed.create(feed_params)
    redirect_to root_path
  end

  def edit
    @feed = Feed.find(params[:id])
  end

  def update
    @feed = Feed.find(params[:id])
    @feed.update(feed_params)
    redirect_to root_path
  end

  def show
    @feed = Feed.find(params[:id])
    require 'open-uri'
    require 'nokogiri'
    feed_url = "#{@feed.base_url}/search/jjj?format=rss&query=#{@feed.query}&sort=rel"

    doc = Nokogiri::XML(open(feed_url))

    @posts = []
    doc.css('item').each_with_index do |node, idx|
       node.css('title').text
       item = {
         id: idx,
         title: node.css('title').text,
         description: node.css('description').text,
         link: node.css('link').text,
         date: node.at('//dc:date').text
       }

       @posts.push(item)
    end

  end

  private
    def feed_params
      params[:feed].permit(:title, :query, :base_url)
    end
end
